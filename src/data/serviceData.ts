export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  overview: string[];
}

export const servicesData: Service[] = [
  {
    id: 1,
    slug: "residential-construction",
    title: "Residential Construction",
    description: "We build modern, durable, comfortable homes designed to your lifestyle.",
    image: "/images/service-image-1.jpg",
    overview: [
      "At our company, we understand that building a home is one of the most personal and significant investments you will ever make. Whether you are creating a custom home from the ground up, renovating an existing space, or adding a modern addition, we are dedicated to delivering exceptional craftsmanship, innovative design solutions, and a seamless construction experience from start to finish.",
      "Our goal is to build spaces that reflect your lifestyle, accommodate your family's needs, and stand the test of time, combining aesthetics with durability and functionality.",
    ],
  },
  {
    id: 2,
    slug: "commercial-construction",
    title: "Commercial Construction",
    description: "High-performance commercial facilities, office buildings, and retail spaces.",
    image: "/images/service-image-2.jpg",
    overview: [
      "We specialize in constructing world-class commercial buildings, modern corporate workspaces, and dynamic retail hubs designed for maximum operational efficiency.",
      "From planning and engineering permits to fast-track construction, our multidisciplinary teams deliver on-budget, on-time turnkey commercial facilities.",
    ],
  },
  {
    id: 3,
    slug: "industrial-construction",
    title: "Industrial Construction",
    description: "Heavy-duty manufacturing plants, factories, and advanced logistics warehouses.",
    image: "/images/service-image-3.jpg",
    overview: [
      "Our industrial division delivers heavy industrial infrastructure, specialized manufacturing facilities, and automated warehouses built with heavy load-bearing structural integrity.",
      "We integrate advanced MEP systems, industrial ventilation, and automated safety standards to support complex production workflows.",
    ],
  },
  {
    id: 4,
    slug: "infrastructure-construction",
    title: "Infrastructure Construction",
    description: "Bridges, flyovers, highways, and resilient municipal civil infrastructure.",
    image: "/images/service-image-4.jpg",
    overview: [
      "Developing foundational civic assets including transit highways, bridges, drainage networks, and high-capacity civil infrastructure.",
      "We employ post-tensioned concrete technologies and advanced engineering to deliver durable, long-lasting municipal landmarks.",
    ],
  },
  {
    id: 5,
    slug: "building-renovation",
    title: "Building Renovation",
    description: "Complete structural restoration and modernization of heritage and aged buildings.",
    image: "/images/service-image-5.jpg",
    overview: [
      "Breathing new life into older structures through thoughtful architectural restoration, seismic retrofitting, and state-of-the-art energy upgrades.",
      "Our renovation specialists preserve unique architectural heritage while introducing contemporary comfort and modern utility.",
    ],
  },
  {
    id: 6,
    slug: "home-remodeling",
    title: "Home Remodeling",
    description: "Custom kitchen, bathroom, and full-space residential remodeling solutions.",
    image: "/images/service-image-6.jpg",
    overview: [
      "Transforming existing living spaces into modern, functional, and aesthetically stunning environments customized to your daily routine.",
      "We manage every phase with precision craftsmanship, high-end materials, and minimal disruption to your daily life.",
    ],
  },
  {
    id: 7,
    slug: "structural-engineering",
    title: "Structural Engineering",
    description: "Comprehensive structural analysis, 3D BIM modeling, and foundation engineering.",
    image: "/images/service-image-7.jpg",
    overview: [
      "Delivering precision structural calculation, seismic analysis, and foundation engineering for complex architectural structures.",
      "Our licensed engineers leverage advanced computer simulation to optimize material efficiency without compromising safety.",
    ],
  },
  {
    id: 8,
    slug: "interior-design",
    title: "Interior Design",
    description: "Sophisticated interior architecture, spatial planning, and luxury bespoke finishes.",
    image: "/images/expertise-item-image-1.jpg",
    overview: [
      "Harmonizing interior spaces with curated color palettes, bespoke lighting designs, ergonomic layouts, and custom furnishings.",
      "We turn architectural volumes into warm, inviting, and luxurious interiors tailored to each client's individual taste.",
    ],
  },
];
