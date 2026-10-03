export interface Project {
  id: number;
  slug: string;
  category: string;
  title: string;
  image: string;
  clientName: string;
  duration: string;
  location: string;
  projectType: string;
  overview: string[];
  challenges: string;
  solutions: string;
  challengesImage: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "modern-family-villa",
    category: "Residential",
    title: "Modern Family Villa",
    image: "/images/project-1.jpg",
    clientName: "The Johnson Family",
    duration: "12 Months",
    location: "Central Valley, California",
    projectType: "Residential",
    overview: [
      "The Modern Family Villa is a state-of-the-art residential project designed to combine contemporary architecture with everyday practicality. Built for a growing family, this spacious home features open-plan living areas, elegant finishes, and energy-efficient systems that ensure maximum energy performance while reducing overall carbon footprint.",
      "Every stage of the project was carefully managed to deliver exceptional quality and a seamless client experience. With customized spaces tailored to their lifestyle, sustainable materials, and precise execution, the villa delivers modern aesthetic with timeless architectural grace.",
    ],
    challenges:
      "The project required intricate structural engineering with complex foundation soil conditions, tight municipal zoning, and high acoustic isolation between living zones.",
    solutions:
      "We overcame these challenges through advanced geotechnical modeling, prefabricated precision frames, and close collaboration with local authorities to expedite fast approvals.",
    challengesImage: "/images/expertise-item-image-1.jpg",
  },
  {
    id: 2,
    slug: "building-restoration",
    category: "Renovation",
    title: "Building Restoration",
    image: "/images/project-2.jpg",
    clientName: "Skyline Heritage Group",
    duration: "18 Months",
    location: "Manhattan, New York",
    projectType: "Renovation & Restoration",
    overview: [
      "Comprehensive architectural revival of a heritage building featuring modern reinforced framework while retaining historic façade elements.",
      "Our team deployed non-invasive structural retrofitting, energy-efficient glazing, and precision historical masonry reconstruction.",
    ],
    challenges:
      "Preserving landmark architectural details while upgrading MEP systems and seismic resistance to modern municipal standards.",
    solutions:
      "Custom laser scanning and lightweight carbon-fiber composite reinforcements delivered structural strength with zero aesthetic compromise.",
    challengesImage: "/images/service-image-2.jpg",
  },
  {
    id: 3,
    slug: "metro-business-center",
    category: "Commercial",
    title: "Metro Business Center",
    image: "/images/project-3.jpg",
    clientName: "Vanguard Properties",
    duration: "24 Months",
    location: "Downtown Chicago, IL",
    projectType: "Commercial Complex",
    overview: [
      "A flagship 32-story commercial tower designed for LEED Gold certification with high-performance curtain walls and smart building controls.",
      "Provides flexible open-plan office layouts, conference centers, and retail concourses built to international architectural standards.",
    ],
    challenges:
      "High-density urban logistics, restricted crane operating hours, and zero tolerance for ground vibration on adjacent commuter tunnels.",
    solutions:
      "Just-in-time material scheduling, advanced acoustic dampening foundations, and 4D BIM simulation avoided all transit interruptions.",
    challengesImage: "/images/service-image-3.jpg",
  },
  {
    id: 4,
    slug: "city-highway-expansion",
    category: "Infrastructure",
    title: "City Highway Expansion",
    image: "/images/project-4.jpg",
    clientName: "State Transport Authority",
    duration: "36 Months",
    location: "Austin, Texas",
    projectType: "Civil Infrastructure",
    overview: [
      "Multi-tier elevated highway system expanding traffic throughput by 65% with durable post-tensioned concrete flyovers.",
      "Engineered with smart traffic monitoring sensors, storm drainage culverts, and sound barriers for adjacent neighborhoods.",
    ],
    challenges:
      "Maintaining active 6-lane traffic corridors during peak rush hours while casting heavy concrete bridge girders.",
    solutions:
      "Nighttime segment installations using modular hydraulic transporters and real-time intelligent traffic redirection algorithms.",
    challengesImage: "/images/expertise-item-image-2.jpg",
  },
  {
    id: 5,
    slug: "manufacturing-plant",
    category: "Industrial",
    title: "Manufacturing Plant",
    image: "/images/service-image-1.jpg",
    clientName: "Apex Manufacturing Ltd.",
    duration: "16 Months",
    location: "Detroit, Michigan",
    projectType: "Industrial Facility",
    overview: [
      "A 250,000 sq ft heavy industrial manufacturing facility engineered for heavy machinery, automated gantry cranes, and high load-bearing floors.",
      "Features reinforced concrete slabs, advanced industrial ventilation, and integrated power distribution sub-stations.",
    ],
    challenges:
      "High soil saturation requiring deep piling and tight tolerances for automated robotic assembly lines.",
    solutions:
      "Driven pre-stressed concrete piles and laser-leveled super-flat flooring exceeded industrial robotics specifications.",
    challengesImage: "/images/service-image-1.jpg",
  },
  {
    id: 6,
    slug: "grand-horizon-hotel",
    category: "Hospitality",
    title: "Grand Horizon Hotel",
    image: "/images/service-image-4.jpg",
    clientName: "Horizon Hospitality Group",
    duration: "20 Months",
    location: "Miami Beach, Florida",
    projectType: "Luxury Resort & Hotel",
    overview: [
      "Luxury 5-star beachfront hotel featuring cantilevered balconies, infinity pools, fine dining venues, and luxury suites.",
      "Engineered to withstand hurricane-force winds with marine-grade exterior finishes and solar-reflecting glass.",
    ],
    challenges:
      "Coastal water table management, saltwater corrosion resistance, and strict environmental shoreline conservation rules.",
    solutions:
      "Continuous dewatering diaphragm walls, epoxy-coated rebar, and eco-friendly coastal barrier integrations.",
    challengesImage: "/images/service-image-4.jpg",
  },
  {
    id: 7,
    slug: "smart-storage-facility",
    category: "Warehouse",
    title: "Smart Storage Facility",
    image: "/images/service-image-6.jpg",
    clientName: "Logix Logistics",
    duration: "10 Months",
    location: "Phoenix, Arizona",
    projectType: "Automated Logistics Hub",
    overview: [
      "High-bay automated storage and retrieval warehouse with thermal insulation and high-efficiency rooftop solar array.",
      "Custom designed for 24/7 autonomous automated guided vehicles (AGVs) and high-density racking systems.",
    ],
    challenges:
      "Extreme desert temperatures and the need for ultra-fast construction timelines for early logistics tenant onboarding.",
    solutions:
      "Fast-track tilt-up concrete wall construction with insulated sandwich panels completed two months ahead of schedule.",
    challengesImage: "/images/service-image-6.jpg",
  },
  {
    id: 8,
    slug: "city-medical-center",
    category: "Government",
    title: "City Medical Center",
    image: "/images/service-image-7.jpg",
    clientName: "Department of Public Health",
    duration: "28 Months",
    location: "Seattle, Washington",
    projectType: "Healthcare Facility",
    overview: [
      "Modern tertiary healthcare medical complex with surgical theaters, intensive care units, and advanced diagnostic imaging labs.",
      "Equipped with redundant medical gas lines, isolated emergency power grids, and negative pressure quarantine wards.",
    ],
    challenges:
      "Stringent biomedical safety standards, radiation shielding for radiology suites, and vibration-isolated floors for MRI machines.",
    solutions:
      "Lead-lined partition walls, floating slab foundations for heavy imaging systems, and multi-tier HEPA filtration air handlers.",
    challengesImage: "/images/service-image-7.jpg",
  },
];
