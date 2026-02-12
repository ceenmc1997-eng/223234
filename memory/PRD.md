# G&A Pallet Website - PRD

## Original Problem Statement
Build a professional black theme website for G&A Pallet, a pallet sales company in Houston, USA. Professional Figma-style design with black theme and green accents matching the logo (white and green). Complete multipage website in English.

## User Personas
- **Industrial Buyers**: Warehouse managers, logistics coordinators seeking reliable pallet suppliers
- **B2B Clients**: Manufacturing companies needing custom pallet solutions
- **International Shippers**: Companies requiring ISPM-15 certified heat-treated pallets

## Core Requirements
- Professional black theme with green (#22C55E) accents
- Multipage website: Home, About, Services, Machinery, Pallets, Contact
- Quote request form with database storage
- Contact form with database storage
- OpenStreetMap integration showing location
- Contact info: sales@gapallet.com, (713) 670-8118
- Address: 8827 Clinton Dr, Houston, TX 77029

## What's Been Implemented (December 2025)

### Pages
1. **Home** - Hero with pallet warehouse image, stats, services preview, machinery highlight, multiple CTAs
2. **About** - Company mission, vision, values, journey timeline, stats  
3. **Services** - TPM services, custom pallets, repair, heat treatment, recycling, logistics, QA (bento grid)
4. **Machinery** - Champion QC306 & HR100 Wood-Mizer with specs, features, and wood processing images
5. **Pallets** - 10 pallet types (GMA, Block, Stringer, Euro, Half, Quarter, Oversized, Heat Treated, Recycled, Custom) with quote form and multiple CTAs
6. **Contact** - Dark theme map (CARTO tiles via MapLibre GL), custom green marker, contact form

### Backend APIs
- POST/GET `/api/quote` - Quote requests storage
- POST/GET `/api/contact` - Contact form submissions

### Features
- Dark theme map using CARTO dark tiles
- 10 pallet types with "Popular" badges and load capacities
- Professional pallet/wood processing images throughout
- Multiple CTAs on each page
- Responsive mobile navigation
- Glassmorphism floating navigation
- Professional typography (Manrope + Inter)
- Custom green marker on map

## Prioritized Backlog

### P0 (Completed)
- ✅ All 6 pages with content
- ✅ Quote request form
- ✅ Contact form
- ✅ Map integration
- ✅ Navigation and routing
- ✅ Backend API endpoints

### P1 (Future Enhancements)
- Email integration (SendGrid/Resend) for form notifications
- Admin dashboard to view quotes/contacts
- Spanish language toggle
- Image gallery/portfolio of completed projects

### P2 (Nice to Have)
- Live chat integration
- Customer testimonials section
- FAQ page
- Blog/News section

## Next Action Items
1. Add email notification when quote/contact is submitted
2. Create admin panel to manage inquiries
3. Add more professional pallet/warehouse images
4. Consider adding testimonials or case studies section
