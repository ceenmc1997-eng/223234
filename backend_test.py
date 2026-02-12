import requests
import sys
from datetime import datetime
import json

class GAPalletAPITester:
    def __init__(self, base_url="https://timber-trade-4.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.results = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)}")
                except:
                    print(f"Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text}")

            self.results.append({
                "test": name,
                "success": success,
                "status_code": response.status_code,
                "expected_status": expected_status
            })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.results.append({
                "test": name,
                "success": False,
                "error": str(e)
            })
            return False, {}

    def test_health_endpoints(self):
        """Test basic health endpoints"""
        print("\n=== Testing Health Endpoints ===")
        
        # Test root API endpoint
        self.run_test("API Root", "GET", "api/", 200)
        
        # Test health check
        self.run_test("Health Check", "GET", "api/health", 200)

    def test_contact_endpoints(self):
        """Test contact form endpoints"""
        print("\n=== Testing Contact Endpoints ===")
        
        # Test GET contact requests (should work even if empty)
        self.run_test("Get Contact Requests", "GET", "api/contact", 200)
        
        # Test POST contact request
        contact_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "(713) 555-0123",
            "company": "Test Company",
            "message": "This is a test message for G&A Pallet contact form."
        }
        
        success, response = self.run_test(
            "Create Contact Request", 
            "POST", 
            "api/contact", 
            200, 
            contact_data
        )
        
        if success:
            print(f"Contact request created with ID: {response.get('id', 'N/A')}")

    def test_quote_endpoints(self):
        """Test quote request endpoints"""
        print("\n=== Testing Quote Endpoints ===")
        
        # Test GET quote requests (should work even if empty)
        self.run_test("Get Quote Requests", "GET", "api/quote", 200)
        
        # Test POST quote request
        quote_data = {
            "name": "Test Customer",
            "email": "customer@example.com",
            "phone": "(713) 555-0456",
            "company": "Test Logistics",
            "pallet_type": "Standard GMA Pallet",
            "quantity": 100,
            "dimensions": "48x40x6",
            "additional_info": "Need ISPM-15 certification for export."
        }
        
        success, response = self.run_test(
            "Create Quote Request", 
            "POST", 
            "api/quote", 
            200, 
            quote_data
        )
        
        if success:
            print(f"Quote request created with ID: {response.get('id', 'N/A')}")

    def test_error_handling(self):
        """Test error handling with invalid data"""
        print("\n=== Testing Error Handling ===")
        
        # Test contact with missing required fields
        invalid_contact = {
            "email": "test@example.com"
            # Missing name and message
        }
        
        self.run_test(
            "Invalid Contact Request", 
            "POST", 
            "api/contact", 
            422,  # Validation error
            invalid_contact
        )
        
        # Test quote with missing required fields
        invalid_quote = {
            "name": "Test"
            # Missing email and pallet_type
        }
        
        self.run_test(
            "Invalid Quote Request", 
            "POST", 
            "api/quote", 
            422,  # Validation error
            invalid_quote
        )

def main():
    print("🚀 Starting G&A Pallet API Tests")
    print("=" * 50)
    
    tester = GAPalletAPITester()
    
    # Run all tests
    tester.test_health_endpoints()
    tester.test_contact_endpoints()
    tester.test_quote_endpoints()
    tester.test_error_handling()
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed. Check the output above for details.")
        return 1

if __name__ == "__main__":
    sys.exit(main())