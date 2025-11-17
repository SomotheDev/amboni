# Tanzania Cabinet Regional Representation Article

## Overview
Added comprehensive analysis article about Tanzania's November 2025 cabinet appointments to the Amboni News platform.

## Files Added/Modified

### Seed Data
- **Modified**: `seed-data.mjs` - Added new article entry to articlesData array

### Images
- `article_images/tanzania_cabinet_zones.png` - Main infographic showing zonal distribution
- `article_images/tanzania_cabinet_comparison.png` - Comparison chart
- `article_images/tanzania_cabinet_combined.png` - Combined regional/zonal map
- `client/public/images/tanzania_cabinet_zones.png` - Copy for web serving
- `client/public/images/tanzania_cabinet_comparison.png` - Copy for web serving
- `client/public/images/tanzania_cabinet_combined.png` - Copy for web serving

## Article Details

**Title**: Tanzania's New Cabinet: A Deep Dive into Regional Representation

**Slug**: `tanzania-cabinet-regional-representation-2025`

**Category**: Tanzania (categoryId: 1)

**Status**: Featured article (isFeatured: 1)

**Published**: November 17, 2025

**Author**: Manus AI (authorId: 1)

## Content Highlights

- Analysis of 56-member cabinet across 7 administrative zones
- Regional representation statistics and breakdown
- Economic geography of power distribution
- Historical context and governance implications
- Professional infographic-style visualizations

## Key Statistics

- **Total Ministers**: 56
- **Administrative Zones**: 7 (all represented - 100%)
- **Regions**: 30 (27 with ministers - 90%)
- **Top Zones**: Coastal & Northern (11 ministers each)

## Deployment Instructions

To make this article visible on the live website:

1. **Database Seeding** (if starting fresh):
   ```bash
   node seed-data.mjs
   ```

2. **Or Add Directly to Database**:
   - The article data is in the seed-data.mjs file
   - Can be inserted via database admin panel or API

3. **Rebuild and Deploy**:
   ```bash
   pnpm install
   pnpm run build
   pnpm run start
   ```

## Image References

The article uses the main infographic:
- Image URL: `/images/tanzania_cabinet_zones.png`
- Additional images available for enhanced article view

## Data Sources

- Official cabinet announcement (November 17, 2025)
- Tanzania National Bureau of Statistics (NBS) 2012 Census boundaries
- OpenStreetMap Tanzania administrative zone classifications

## Notes

- Article is marked as featured for homepage prominence
- Uses Markdown formatting in content field
- Images optimized for web (PNG format, high resolution)
- Content follows journalistic style with data-driven analysis

