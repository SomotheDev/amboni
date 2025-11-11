import { drizzle } from "drizzle-orm/mysql2";
import { categories, articles } from "./drizzle/schema.js";

const db = drizzle(process.env.DATABASE_URL);

const categoriesData = [
  { name: "Tanzania", slug: "tanzania", description: "Latest news and developments from Tanzania", displayOrder: 1 },
  { name: "Kenya", slug: "kenya", description: "News and updates from Kenya", displayOrder: 2 },
  { name: "Uganda", slug: "uganda", description: "Stories from Uganda", displayOrder: 3 },
  { name: "Rwanda", slug: "rwanda", description: "Rwanda news and analysis", displayOrder: 4 },
  { name: "Business", slug: "business", description: "Business and economic news across East Africa", displayOrder: 5 },
  { name: "Politics", slug: "politics", description: "Political developments and governance", displayOrder: 6 },
  { name: "Technology", slug: "technology", description: "Tech innovation and digital transformation", displayOrder: 7 },
  { name: "Agriculture", slug: "agriculture", description: "Agricultural news and farming developments", displayOrder: 8 },
  { name: "Infrastructure", slug: "infrastructure", description: "Infrastructure projects and development", displayOrder: 9 },
  { name: "Education", slug: "education", description: "Education news and academic developments", displayOrder: 10 },
];

const articlesData = [
  {
    title: "Tanzania's Economy Shows Robust Growth in Q4 2024",
    slug: "tanzania-economy-robust-growth-q4-2024",
    excerpt: "Tanzania's GDP expanded by 5.8% in the final quarter of 2024, driven by strong performance in manufacturing, tourism, and agricultural sectors, positioning the nation as one of East Africa's fastest-growing economies.",
    content: `Tanzania's economy demonstrated remarkable resilience and growth in the fourth quarter of 2024, with GDP expanding by 5.8% compared to the same period in 2023. The robust performance was primarily driven by strong gains in the manufacturing sector, which grew by 7.2%, and a resurgent tourism industry that saw visitor numbers reach pre-pandemic levels.

The manufacturing sector's expansion was particularly notable in the food processing, textile, and construction materials industries. Dar es Salaam's industrial zones reported capacity utilization rates exceeding 80%, the highest in five years. Foreign direct investment in manufacturing reached $1.2 billion in 2024, with significant investments from Chinese, Indian, and European companies.

Tourism revenue surged to $3.1 billion, surpassing 2019 levels for the first time since the COVID-19 pandemic. The northern safari circuit, including Serengeti National Park and Ngorongoro Crater, reported record visitor numbers. The government's investment in tourism infrastructure, including the expansion of Kilimanjaro International Airport, has paid dividends.

The agricultural sector, which employs over 65% of Tanzania's workforce, contributed significantly to the growth. Coffee and cashew nut exports reached record highs, benefiting from favorable weather conditions and improved farming techniques. The government's agricultural modernization program, which provides subsidized inputs and extension services to smallholder farmers, has begun showing tangible results.

However, challenges remain. Inflation stood at 4.2% in December 2024, slightly above the central bank's target range. The Tanzanian shilling depreciated by 3.5% against the US dollar during the year, raising concerns about import costs. Energy supply constraints in some regions continue to hamper industrial production.

Looking ahead, economists project Tanzania's economy to maintain growth rates above 5% through 2025, supported by ongoing infrastructure projects, including the Standard Gauge Railway expansion and the Julius Nyerere Hydropower Project. The government has set an ambitious target of achieving middle-income status by 2030.`,
    imageUrl: "/images/tanzania_economy.jpg",
    categoryId: 1,
    authorId: 1,
    isFeatured: 1,
    publishedAt: new Date("2024-11-10T09:00:00Z"),
  },
  {
    title: "Nairobi Tech Hub Attracts $50M in Venture Capital Funding",
    slug: "nairobi-tech-hub-50m-venture-capital",
    excerpt: "Kenya's Silicon Savannah continues to cement its position as Africa's leading tech ecosystem, with Nairobi-based startups securing $50 million in new venture capital investments in the past quarter.",
    content: `Kenya's technology sector received a significant boost as Nairobi-based startups secured $50 million in venture capital funding during the fourth quarter of 2024, reinforcing the city's reputation as Africa's premier technology hub.

The funding round was led by international venture capital firms including Sequoia Capital Africa, TLcom Capital, and Partech Africa, with participation from several European and Asian investors. The investments span multiple sectors, including fintech, agritech, healthtech, and e-commerce platforms.

M-Shwari Plus, a digital lending platform built on mobile money infrastructure, raised $15 million in Series B funding. The company has disbursed over $500 million in microloans to 2 million Kenyan users since its launch in 2022. The new funding will support expansion into Tanzania and Uganda.

FarmConnect, an agritech startup connecting smallholder farmers directly with buyers, secured $12 million. The platform has onboarded 50,000 farmers across Kenya and has facilitated transactions worth $80 million. The company plans to integrate AI-powered crop advisory services and expand its cold chain logistics network.

The healthtech sector also attracted significant investment, with TeleDoc Kenya raising $8 million to expand its telemedicine services. The platform connects patients in rural areas with doctors in urban centers, addressing Kenya's healthcare accessibility challenges.

Nairobi's tech ecosystem benefits from strong government support, including tax incentives for tech companies and investments in digital infrastructure. The Konza Technopolis project, Kenya's ambitious smart city initiative, is attracting both local and international tech companies.

However, challenges persist. Access to reliable electricity and internet connectivity remains inconsistent in some areas. The regulatory environment for fintech companies has become more stringent, with the Central Bank of Kenya implementing stricter licensing requirements.

Despite these challenges, industry experts remain optimistic. "Nairobi has all the ingredients for a thriving tech ecosystem: talented developers, entrepreneurial spirit, and increasing investor confidence," said James Mwangi, CEO of the Kenya ICT Board.`,
    imageUrl: "/images/kenya_tech.jpg",
    categoryId: 2,
    authorId: 1,
    isFeatured: 0,
    publishedAt: new Date("2024-11-09T14:30:00Z"),
  },
  {
    title: "Uganda's Coffee Exports Reach Record High",
    slug: "uganda-coffee-exports-record-high",
    excerpt: "Uganda's coffee sector achieved unprecedented export volumes in 2024, shipping 6.2 million bags and generating $850 million in foreign exchange, as quality improvements and favorable weather boost production.",
    content: `Uganda's coffee industry celebrated a banner year in 2024, with exports reaching a record 6.2 million 60-kilogram bags, generating $850 million in foreign exchange earnings. The achievement marks a 15% increase from 2023 and solidifies Uganda's position as Africa's leading coffee exporter.

The surge in production was attributed to favorable weather conditions, improved farming practices, and the government's National Coffee Policy implementation. The Uganda Coffee Development Authority (UCDA) reported that both Robusta and Arabica varieties showed strong yields.

Robusta coffee, which accounts for 80% of Uganda's production, benefited from ideal rainfall patterns in the central and western regions. Arabica production in the Mount Elgon and Rwenzori regions also exceeded expectations, with farmers reporting yields 20% higher than the previous year.

Quality improvements have been a key focus. The government's coffee replanting program distributed 300 million high-yielding, disease-resistant seedlings to farmers over the past three years. Training programs on post-harvest handling and processing have helped Ugandan coffee command premium prices in international markets.

The sector's success has had significant socioeconomic impacts. Coffee farming directly employs 1.7 million households, predominantly smallholder farmers with plots of less than two hectares. Rising incomes have translated into improved living standards, with coffee-growing regions reporting increased school enrollment rates and better healthcare access.

Value addition is emerging as the next frontier. Several coffee processing plants have been established in Kampala and Jinja, producing roasted and packaged coffee for both domestic and export markets. The government aims to increase the share of processed coffee exports from the current 5% to 30% by 2030.

However, challenges remain. Price volatility in international markets affects farmer incomes, and climate change poses long-term risks. Coffee wilt disease continues to threaten Robusta plantations in some districts, requiring ongoing surveillance and control measures.

International buyers, including Starbucks and Nespresso, have increased their sourcing from Uganda, attracted by quality improvements and sustainability certifications. Several cooperatives have achieved Rainforest Alliance and Fair Trade certifications, opening access to premium markets.`,
    imageUrl: "/images/uganda_agriculture.jpg",
    categoryId: 3,
    authorId: 1,
    isFeatured: 0,
    publishedAt: new Date("2024-11-08T11:15:00Z"),
  },
  {
    title: "Rwanda's Mountain Gorilla Population Continues to Grow",
    slug: "rwanda-mountain-gorilla-population-grows",
    excerpt: "Conservation efforts in Rwanda's Volcanoes National Park have led to a 12% increase in the mountain gorilla population, with the latest census counting 604 individuals, offering hope for the endangered species.",
    content: `Rwanda's mountain gorilla population has grown to 604 individuals, according to the latest census conducted by the Rwanda Development Board and conservation partners. The 12% increase from 2021 represents a remarkable conservation success story and provides crucial hope for this critically endangered species.

The census, conducted over six months in Volcanoes National Park and the broader Virunga Massif ecosystem, involved teams of researchers, veterinarians, and park rangers. Using a combination of direct observation, DNA analysis from fecal samples, and photographic identification, researchers documented 12 new gorilla groups and several solitary males.

Rwanda's conservation model combines strict protection measures with community benefits. The government's revenue-sharing program allocates 10% of tourism income to communities living near the park, funding schools, health centers, and infrastructure projects. This approach has transformed local attitudes toward gorilla conservation.

Gorilla tourism generates approximately $400 million annually for Rwanda's economy, making it the country's third-largest foreign exchange earner. Permits to visit gorilla families cost $1,500 per person, with demand consistently exceeding supply. The high fees support conservation efforts and limit visitor numbers to minimize disturbance to the gorillas.

Veterinary interventions have played a crucial role in population growth. The Gorilla Doctors program provides medical care to sick and injured gorillas, treating respiratory infections, removing snares, and addressing other health issues. The team conducted 45 interventions in 2024, with a 90% success rate.

Habitat protection has been enhanced through anti-poaching patrols and buffer zone management. Park rangers, equipped with modern technology including GPS trackers and camera traps, maintain 24/7 surveillance. Poaching incidents have declined by 80% over the past decade.

However, challenges persist. Human-wildlife conflict occasionally occurs when gorillas venture into agricultural areas near park boundaries. Climate change poses long-term risks to the bamboo forests that provide crucial gorilla food sources. Disease transmission from humans to gorillas remains a concern, particularly respiratory infections.

Regional cooperation has been essential to conservation success. Rwanda works closely with Uganda and the Democratic Republic of Congo to protect the transboundary Virunga ecosystem. Joint patrols and information sharing have improved security and monitoring across borders.`,
    imageUrl: "/images/rwanda_tourism.jpg",
    categoryId: 4,
    authorId: 1,
    isFeatured: 0,
    publishedAt: new Date("2024-11-07T08:45:00Z"),
  },
  {
    title: "East Africa's Standard Gauge Railway Expansion Accelerates",
    slug: "east-africa-standard-gauge-railway-expansion",
    excerpt: "The ambitious Standard Gauge Railway project connecting major East African cities reaches a critical milestone, with the Nairobi-Naivasha section now operational and construction advancing on the Uganda extension.",
    content: `The Standard Gauge Railway (SGR), East Africa's most ambitious infrastructure project, reached a significant milestone as the Nairobi-Naivasha section became fully operational, moving the region closer to realizing a modern rail network connecting major economic centers.

The 120-kilometer Nairobi-Naivasha extension, which cost $1.5 billion, features state-of-the-art stations, modern signaling systems, and freight handling facilities. The railway has reduced cargo transit time from Mombasa port to Naivasha from two days to eight hours, significantly improving logistics efficiency.

Freight volumes on the SGR have exceeded projections, with the railway handling 6 million tons of cargo in 2024. Major beneficiaries include importers of petroleum products, agricultural inputs, and manufactured goods. The reduced transportation costs have translated into lower prices for consumers in Kenya and neighboring countries.

Passenger services have also proven popular. The Mombasa-Nairobi Madaraka Express carries 1.5 million passengers annually, offering comfortable travel at affordable prices. The journey takes four and a half hours, compared to eight hours by road, and tickets cost significantly less than air travel.

Construction is advancing on the Naivasha-Malaba section, which will connect Kenya to Uganda. The 487-kilometer extension faces challenges including difficult terrain, land acquisition issues, and funding constraints. However, both governments remain committed to the project, viewing it as critical for regional integration.

Uganda is simultaneously developing its section of the SGR, with the Malaba-Kampala route under construction. The Ugandan government has secured financing from international lenders and expects to complete the first phase by 2027. The railway will eventually extend to Rwanda and potentially to the Democratic Republic of Congo.

The economic impact extends beyond transportation. The SGR has created thousands of jobs during construction and operations. Kenya Railways has trained hundreds of engineers, technicians, and operators, building local capacity in railway management. Industrial parks are emerging along the railway corridor, attracted by improved connectivity.

Environmental considerations have been integrated into the project. Wildlife crossings have been constructed in sensitive areas, including Tsavo National Park. Noise barriers protect residential areas near the railway line. However, environmental groups continue to raise concerns about habitat fragmentation and wildlife impacts.

Critics point to the project's high costs and debt implications. Kenya's SGR debt to Chinese lenders exceeds $5 billion, raising concerns about debt sustainability. Questions about financial viability persist, as operating revenues have not yet covered debt service costs.`,
    imageUrl: "/images/east_africa_infrastructure.jpg",
    categoryId: 9,
    authorId: 1,
    isFeatured: 0,
    publishedAt: new Date("2024-11-06T10:00:00Z"),
  },
  {
    title: "Tanzania Parliament Approves New Investment Act",
    slug: "tanzania-parliament-new-investment-act",
    excerpt: "Tanzania's parliament has passed comprehensive investment legislation aimed at attracting foreign capital, streamlining business registration, and providing incentives for priority sectors including manufacturing and agriculture.",
    content: `Tanzania's National Assembly unanimously approved the Investment Act 2024, landmark legislation designed to create a more attractive environment for domestic and foreign investors. The new law introduces significant reforms to business registration procedures, tax incentives, and investor protections.

The Act establishes a one-stop center for investment approvals, promising to reduce business registration time from an average of 30 days to just 5 days. Investors will be able to complete all regulatory requirements, including licenses and permits, through a single digital platform. The Tanzania Investment Centre will coordinate with relevant government agencies to streamline processes.

Tax incentives are a key feature of the new legislation. Manufacturing companies investing more than $10 million will qualify for a five-year corporate tax holiday, followed by a reduced rate of 15% for the subsequent five years. Agricultural processing ventures and technology companies receive similar benefits.

Special economic zones will be expanded under the Act. The government plans to establish ten new zones across the country, offering additional incentives including duty-free importation of capital equipment and raw materials. Existing zones in Dar es Salaam, Dodoma, and Mwanza will be upgraded with improved infrastructure.

Investor protections have been strengthened. The Act guarantees against nationalization without fair compensation and allows unrestricted repatriation of profits and dividends. Dispute resolution mechanisms have been enhanced, with provisions for international arbitration in investment disputes.

The legislation targets priority sectors including manufacturing, agriculture and agro-processing, tourism, information and communication technology, and infrastructure development. Each sector has specific incentives designed to address its unique challenges and opportunities.

Local content requirements have been carefully balanced to encourage foreign investment while promoting local participation. Companies must demonstrate plans for technology transfer and skills development for Tanzanian employees. Preference is given to investors who partner with local businesses.

Business groups have welcomed the new law. The Tanzania Private Sector Foundation praised the government's commitment to improving the investment climate. International investors have expressed interest, with several companies indicating plans to expand operations in Tanzania.

However, some concerns remain. Labor unions worry that tax incentives may reduce government revenue needed for public services. Environmental groups emphasize the need for robust environmental impact assessments for new investments. Implementation will be crucial to the Act's success.`,
    imageUrl: "/images/tanzania_politics.jpg",
    categoryId: 6,
    authorId: 1,
    isFeatured: 0,
    publishedAt: new Date("2024-11-05T13:20:00Z"),
  },
  {
    title: "Mombasa Port Handles Record Container Volume",
    slug: "mombasa-port-record-container-volume",
    excerpt: "The Port of Mombasa processed 1.5 million twenty-foot equivalent units in 2024, a 10% increase from the previous year, as infrastructure upgrades and operational improvements boost capacity.",
    content: `The Port of Mombasa, East Africa's largest seaport, achieved a milestone by handling 1.5 million twenty-foot equivalent units (TEUs) in 2024, representing a 10% increase from 2023. The record volume reflects growing regional trade and successful infrastructure modernization efforts.

The Kenya Ports Authority (KPA) attributed the growth to several factors, including the completion of the second container terminal, acquisition of modern cargo handling equipment, and implementation of the Port Community System for digital documentation. Vessel turnaround time has been reduced from an average of 4.5 days to 3.2 days.

The second container terminal, which became fully operational in early 2024, added 550,000 TEU capacity. The facility features three ship-to-shore gantry cranes, 16 rubber-tired gantry cranes, and modern container stacking systems. The terminal can accommodate larger vessels, including those with capacities exceeding 10,000 TEUs.

Digitalization has transformed port operations. The Port Community System connects all stakeholders including shipping lines, clearing agents, Kenya Revenue Authority, and other government agencies. Electronic documentation has eliminated paper-based processes, reducing clearance time and minimizing opportunities for corruption.

The port serves not only Kenya but also Uganda, Rwanda, Burundi, South Sudan, eastern Democratic Republic of Congo, and northern Tanzania. Transit cargo accounts for approximately 30% of total volumes. Improved efficiency at Mombasa has positive ripple effects throughout the region.

Infrastructure development continues. The KPA is constructing a third container terminal with a capacity of 450,000 TEUs, expected to be operational by 2026. Dredging operations have deepened the harbor to accommodate larger vessels. The port's rail connection to the Standard Gauge Railway has improved cargo evacuation.

However, challenges persist. Congestion during peak seasons remains an issue, with container dwell time occasionally exceeding the target of five days. Road infrastructure connecting the port to the city and hinterland requires upgrading. Competition from Tanzania's Dar es Salaam port is intensifying.

The port's economic impact is substantial. It directly employs 15,000 people and supports hundreds of thousands of jobs in related industries including logistics, warehousing, and clearing services. Port activities contribute approximately 2% to Kenya's GDP.

Environmental sustainability is receiving increased attention. The KPA has implemented measures to reduce air and water pollution, including shore power facilities for docked ships and waste management systems. Plans for a green port certification are underway.`,
    imageUrl: "/images/east_africa_trade.jpg",
    categoryId: 5,
    authorId: 1,
    isFeatured: 0,
    publishedAt: new Date("2024-11-04T09:30:00Z"),
  },
  {
    title: "Tanzania Universities Embrace Digital Learning Platforms",
    slug: "tanzania-universities-digital-learning",
    excerpt: "Tanzania's higher education institutions are rapidly adopting digital learning technologies, with 15 universities launching online degree programs and investing in learning management systems to expand access to education.",
    content: `Tanzania's higher education sector is undergoing a digital transformation, with universities across the country investing heavily in online learning platforms and digital infrastructure. Fifteen universities have launched fully online degree programs in the past year, dramatically expanding access to higher education.

The University of Dar es Salaam, Tanzania's oldest and largest university, has enrolled 5,000 students in its online programs since launching in 2023. Programs span business administration, education, information technology, and public health. The university has partnered with international technology providers to ensure platform reliability and quality content delivery.

The shift to digital learning addresses several challenges facing Tanzanian higher education. Limited physical infrastructure has constrained enrollment growth, with many qualified students unable to secure places in traditional programs. Online education allows universities to serve more students without massive investments in buildings and facilities.

Affordability is another key benefit. Online programs typically cost 30-40% less than traditional on-campus programs, making higher education accessible to working professionals and students from lower-income families. Flexible scheduling allows students to balance education with work and family responsibilities.

The government has supported the digital transition through policy reforms and infrastructure investments. The Tanzania Commission for Universities has developed quality assurance frameworks for online education. The government is expanding internet connectivity to rural areas through the National ICT Broadband Backbone project.

However, significant challenges remain. Internet connectivity is unreliable in many parts of the country, particularly rural areas. Many students lack computers or smartphones capable of accessing online learning platforms. Digital literacy varies widely among students and faculty.

Faculty training has been a priority. Universities have conducted workshops on online pedagogy, content development, and learning management system usage. Some institutions have partnered with international universities to learn best practices in online education delivery.

Quality concerns have been raised by some stakeholders. Critics question whether online education can provide the same learning experience as traditional classroom instruction, particularly for programs requiring hands-on skills. Universities are addressing these concerns by incorporating practical components and requiring periodic in-person sessions.

The private sector is playing an increasing role. Several technology companies have developed learning platforms specifically for African markets, offering features like offline content access and low-bandwidth optimization. Partnerships between universities and tech companies are becoming more common.

Student outcomes are being closely monitored. Early data suggests that completion rates for online programs are comparable to traditional programs, and graduate employment rates are similar. However, more research is needed to fully assess the long-term impact of online education.`,
    imageUrl: "/images/tanzania_education.jpg",
    categoryId: 10,
    authorId: 1,
    isFeatured: 0,
    publishedAt: new Date("2024-11-03T11:00:00Z"),
  },
  {
    title: "Kenya's Wildlife Conservancies Report Tourism Boom",
    slug: "kenya-wildlife-conservancies-tourism-boom",
    excerpt: "Community-owned wildlife conservancies in Kenya experienced a 25% increase in tourist visits in 2024, generating $120 million in revenue and demonstrating the success of community-based conservation models.",
    content: `Kenya's community wildlife conservancies experienced unprecedented growth in 2024, with tourist visits increasing by 25% and generating $120 million in revenue. The success demonstrates the viability of community-based conservation as an alternative to traditional national park models.

The Kenya Wildlife Conservancies Association (KWCA) reports that 160 registered conservancies now cover 11% of Kenya's land area, providing critical wildlife habitat and migration corridors. These conservancies are owned and managed by local communities, who benefit directly from tourism revenue.

The Maasai Mara ecosystem exemplifies the conservancy model's success. Community conservancies surrounding Maasai Mara National Reserve host numerous safari camps and lodges. Landowners receive lease payments for setting aside land for wildlife, providing income that often exceeds what they would earn from livestock or agriculture.

Wildlife populations in conservancies have shown remarkable recovery. The northern Kenya conservancies have seen elephant populations increase by 15% over the past five years. Predator numbers, including lions, leopards, and cheetahs, have also grown. The conservancy model reduces human-wildlife conflict by creating buffer zones around protected areas.

Revenue distribution mechanisms ensure benefits reach community members. Conservancies typically allocate funds for education, healthcare, water projects, and infrastructure development. Some communities receive direct cash payments, while others invest in community enterprises like cultural centers and craft cooperatives.

Tourism experiences in conservancies often differ from national parks. Lower visitor densities provide more exclusive wildlife viewing. Many conservancies offer walking safaris, night drives, and cultural experiences not permitted in national parks. This diversification attracts high-value tourists willing to pay premium prices.

However, challenges exist. Some conservancies struggle with governance issues and unequal benefit distribution. Wildlife populations can cause crop damage and livestock losses, creating tensions despite compensation schemes. Climate change and prolonged droughts stress both wildlife and pastoral communities.

The conservancy model has attracted international attention and support. Conservation organizations including The Nature Conservancy, African Wildlife Foundation, and Space for Giants provide technical and financial assistance. International donors fund anti-poaching operations, community development projects, and wildlife monitoring.

The COVID-19 pandemic tested the model's resilience. Tourism revenue collapsed in 2020-2021, forcing conservancies to seek alternative funding sources. Many diversified into sustainable agriculture, beekeeping, and handicrafts. The rapid recovery in 2024 demonstrates the underlying strength of the model.

Government policy has been supportive. The Wildlife Conservation and Management Act recognizes conservancies as legitimate land use and provides a legal framework for their operation. Tax incentives encourage tourism investment in conservancy areas.`,
    imageUrl: "/images/kenya_wildlife.jpg",
    categoryId: 2,
    authorId: 1,
    isFeatured: 0,
    publishedAt: new Date("2024-11-02T14:45:00Z"),
  },
  {
    title: "East Africa Accelerates Renewable Energy Development",
    slug: "east-africa-renewable-energy-development",
    excerpt: "East African nations are rapidly expanding renewable energy capacity, with solar, wind, and geothermal projects attracting $2.5 billion in investment in 2024, as the region transitions away from fossil fuels.",
    content: `East Africa is emerging as a renewable energy powerhouse, with the region attracting $2.5 billion in clean energy investments during 2024. Solar, wind, geothermal, and hydroelectric projects are transforming the energy landscape and providing millions of people with access to electricity.

Kenya leads the region in geothermal energy development, with installed capacity reaching 950 megawatts. The Olkaria geothermal complex in the Rift Valley is one of the largest in the world. Kenya Electricity Generating Company (KenGen) plans to add another 300 megawatts by 2027, which would make geothermal the country's largest power source.

Solar energy is experiencing explosive growth across the region. Tanzania has commissioned three large-scale solar plants totaling 150 megawatts in 2024, with another 300 megawatts under construction. Off-grid solar systems have provided electricity to 2 million rural households that previously lacked access.

Rwanda has set ambitious targets for renewable energy, aiming for 100% clean electricity by 2030. The country has invested heavily in solar and methane gas from Lake Kivu. The 56-megawatt KivuWatt plant extracts methane from the lake's depths, simultaneously generating electricity and reducing the risk of catastrophic gas eruptions.

Wind energy is gaining traction, particularly in Kenya and Tanzania. The Lake Turkana Wind Power project in northern Kenya, Africa's largest wind farm with 310 megawatts capacity, has been operating at full capacity. Tanzania is developing wind projects along its coast and in the southern highlands.

Hydroelectric power remains important, though climate change poses challenges. Tanzania's Julius Nyerere Hydropower Project, with 2,115 megawatts capacity, began generating electricity in 2024. However, drought conditions have reduced output from existing hydroelectric plants in several countries.

The transition to renewable energy has multiple benefits. Countries are reducing dependence on imported fossil fuels, saving foreign exchange. Greenhouse gas emissions are declining. Rural electrification is accelerating, with mini-grids and off-grid systems reaching remote communities.

Private sector participation has been crucial. Independent power producers have invested billions in renewable energy projects, attracted by government incentives and power purchase agreements. International development finance institutions provide concessional loans and risk guarantees.

However, challenges remain. Grid infrastructure requires upgrading to accommodate variable renewable energy sources. Energy storage solutions are needed to ensure reliable supply. Regulatory frameworks in some countries need strengthening to attract more private investment.

The cost of renewable energy has declined dramatically, making it competitive with fossil fuels. Solar panel prices have fallen by 80% over the past decade. This cost reduction has made renewable energy the economically rational choice for new power generation capacity.`,
    imageUrl: "/images/east_africa_energy.jpg",
    categoryId: 5,
    authorId: 1,
    isFeatured: 0,
    publishedAt: new Date("2024-11-01T10:15:00Z"),
  },
];

async function seed() {
  try {
    console.log("Seeding categories...");
    
    // Insert categories
    for (const category of categoriesData) {
      await db.insert(categories).values(category);
      console.log(`Inserted category: ${category.name}`);
    }

    console.log("\nSeeding articles...");
    
    // Insert articles
    for (const article of articlesData) {
      await db.insert(articles).values(article);
      console.log(`Inserted article: ${article.title}`);
    }

    console.log("\n✅ Database seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seed();
