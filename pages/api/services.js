// pages/api/services.js

export default function handler(req, res) {
    const services = [
      {
        id: 1,
        title: 'Residential Properties',
        description: 'Explore beautiful residential properties that fit your dream home, from cozy apartments to luxurious villas in the Naigaon, Vasai, and Palghar region.',
        icon: 'FaHome', // Change this to a string representing the icon name
      },
      {
        id: 2,
        title: 'Commercial Spaces',
        description: 'Find the perfect commercial spaces to grow your business, including offices, retail spaces, and more, in prime locations across the city.',
        icon: 'FaRegBuilding',
      },
      {
        id: 3,
        title: 'Investment Consulting',
        description: 'Get expert investment consulting to help you make informed decisions about real estate investments and maximize your returns.',
        icon: 'FaChartLine',
      },
      {
        id: 4,
        title: 'Property Deals',
        description: 'Work with us to secure the best property deals through our trusted network of realtors, buyers, and sellers. We ensure smooth transactions every time.',
        icon: 'FaHandshake',
      },
    ];
  
    res.status(200).json(services);
  }
  