// export  const sampleDoctors = [
//   {
//     name: "Dr. Ankit Mehra",
//     specialization: "Physiotherapist",
//     experience: 9,
//     rating: 4.9,
//     reviews: 240,
//     fees: 700,
//     city: "Mumbai",
//     image:
//       "https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg",
//   },
//   {
//     name: "Dr. Riya Kapoor",
//     specialization: "Orthopedic",
//     experience: 11,
//     rating: 4.7,
//     reviews: 198,
//     fees: 900,
//     city: "Delhi",
//     image:
//       "https://images.pexels.com/photos/8460034/pexels-photo-8460034.jpeg",
//   },
//   {
//     name: "Dr. Mehul Shah",
//     specialization: "Cardiologist",
//     experience: 15,
//     rating: 4.8,
//     reviews: 305,
//     fees: 1500,
//     city: "Ahmedabad",
//     image:
//       "https://images.pexels.com/photos/5327912/pexels-photo-5327912.jpeg",
//   },
//   {
//     name: "Dr. Kavita Suresh",
//     specialization: "Dermatologist",
//     experience: 7,
//     rating: 4.6,
//     reviews: 167,
//     fees: 800,
//     city: "Bangalore",
//     image:
//       "https://images.pexels.com/photos/8460162/pexels-photo-8460162.jpeg",
//   },
//   {
//     name: "Dr. Rahul Desai",
//     specialization: "General Physician",
//     experience: 12,
//     rating: 4.5,
//     reviews: 210,
//     fees: 600,
//     city: "Pune",
//     image:
//       "https://images.pexels.com/photos/6129041/pexels-photo-6129041.jpeg",
//   },
//   {
//     name: "Dr. Sana Iqbal",
//     specialization: "Gynecologist",
//     experience: 10,
//     rating: 4.9,
//     reviews: 280,
//     fees: 1200,
//     city: "Hyderabad",
//     image:
//       "https://images.pexels.com/photos/7580255/pexels-photo-7580255.jpeg",
//   },
//   {
//     name: "Dr. Arvind Khanna",
//     specialization: "Neurologist",
//     experience: 18,
//     rating: 4.8,
//     reviews: 330,
//     fees: 1800,
//     city: "Chandigarh",
//     image:
//       "https://images.pexels.com/photos/8460346/pexels-photo-8460346.jpeg",
//   },
//   {
//     name: "Dr. Priya Nair",
//     specialization: "Pediatrician",
//     experience: 8,
//     rating: 4.7,
//     reviews: 190,
//     fees: 700,
//     city: "Kochi",
//     image:
//       "https://images.pexels.com/photos/12663024/pexels-photo-12663024.jpeg",
//   },
//   {
//     name: "Dr. Manish Goyal",
//     specialization: "Dentist",
//     experience: 5,
//     rating: 4.4,
//     reviews: 120,
//     fees: 500,
//     city: "Jaipur",
//     image:
//       "https://images.pexels.com/photos/8460029/pexels-photo-8460029.jpeg",
//   },
//   {
//     name: "Dr. Nisha Thomas",
//     specialization: "Psychiatrist",
//     experience: 13,
//     rating: 4.9,
//     reviews: 250,
//     fees: 1600,
//     city: "Chennai",
//     image:
//       "https://images.pexels.com/photos/8460156/pexels-photo-8460156.jpeg",
//   },
//   {
//     name: "Dr. Vikas Patil",
//     specialization: "ENT Specialist",
//     experience: 6,
//     rating: 4.3,
//     reviews: 110,
//     fees: 650,
//     city: "Nagpur",
//     image:
//       "https://images.pexels.com/photos/6749776/pexels-photo-6749776.jpeg",
//   },
//   {
//     name: "Dr. Shalini Rao",
//     specialization: "Ophthalmologist",
//     experience: 14,
//     rating: 4.8,
//     reviews: 270,
//     fees: 1000,
//     city: "Surat",
//     image:
//       "https://images.pexels.com/photos/8460378/pexels-photo-8460378.jpeg",
//   },
//   {
//     name: "Dr. Harsh Jain",
//     specialization: "Gastroenterologist",
//     experience: 16,
//     rating: 4.6,
//     reviews: 220,
//     fees: 1400,
//     city: "Lucknow",
//     image:
//       "https://images.pexels.com/photos/8460360/pexels-photo-8460360.jpeg",
//   },
// ];



export const sampleDoctors = [
  {
    id: 1,
    name: "Dr. Rohan Mehta",
    specialization: "Physiotherapist",
    experience: 12,
    rating: 4.8,
    reviewsCount: 312,
    fee: "₹700",
    city: "Mumbai",
    image: "https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg",

    about:
      "Dr. Rohan Mehta is a certified physiotherapist specializing in musculoskeletal and sports rehabilitation. With over 12 years of experience, he has treated athletes, working professionals, and senior patients. His treatment approach focuses on long-term recovery and strengthening.",

    languages: ["English", "Hindi", "Marathi"],

    slots: ["10:00 AM", "1:00 PM", "6:00 PM"],

    reviews: [
      {
        user: "Amit Sharma",
        rating: 5,
        comment:
          "Very professional and knowledgeable. My knee pain reduced within a few sessions. Highly recommended!",
        date: "2 days ago",
      },
      {
        user: "Neha Gupta",
        rating: 4,
        comment:
          "Explains exercises in detail and is very patient. The clinic is clean and well-maintained.",
        date: "1 week ago",
      },
      {
        user: "Rohit Verma",
        rating: 5,
        comment:
          "Helped me recover from a back injury. Friendly, calm, and really good at diagnosis.",
        date: "3 weeks ago",
      },
    ],
  },

  {
    id: 2,
    name: "Dr. Riya Kapoor",
    specialization: "Orthopedic",
    experience: 11,
    rating: 4.7,
    reviews: 198,
    fees: 900,
    city: "Delhi",
    image: "https://images.pexels.com/photos/8460034/pexels-photo-8460034.jpeg",

    about:
      "Dr. Riya Kapoor is an experienced orthopedic specialist with a focus on joint pain, fractures, and sports injuries. She is known for her accurate diagnosis and effective treatment plans. Patients appreciate her calm and reassuring approach.",

    languages: ["English", "Hindi"],

    slots: ["9:30 AM", "2:00 PM", "7:00 PM"],

    reviews: [
      {
        user: "Suman Rao",
        rating: 5,
        comment:
          "Her treatment for my shoulder pain worked wonderfully. She listens carefully.",
        date: "4 days ago",
      },
      {
        user: "Anil Kumar",
        rating: 4,
        comment:
          "Good doctor with clear explanations. Had a slight waiting time but worth it.",
        date: "1 week ago",
      },
      {
        user: "Kritika Jain",
        rating: 5,
        comment:
          "I had a fracture, and her treatment helped me recover smoothly. Very polite.",
        date: "3 weeks ago",
      },
    ],
  },

  {
    id: 3,
    name: "Dr. Mehul Shah",
    specialization: "Cardiologist",
    experience: 15,
    rating: 4.8,
    reviews: 305,
    fees: 1500,
    city: "Ahmedabad",
    image: "https://images.pexels.com/photos/5327912/pexels-photo-5327912.jpeg",

    about:
      "Dr. Mehul Shah is a senior cardiologist with 15 years of expertise in heart health, cardiac emergencies, and preventive cardiology. He is trusted for his precise diagnosis and patient-focused care.",

    languages: ["English", "Hindi", "Gujarati"],

    slots: ["11:00 AM", "3:00 PM", "8:00 PM"],

    reviews: [
      {
        user: "Pritesh Modi",
        rating: 5,
        comment:
          "Probably the best cardiologist in the city. Very attentive and reassuring.",
        date: "1 day ago",
      },
      {
        user: "Meera Shah",
        rating: 5,
        comment:
          "Explains everything very clearly. My father is doing much better now.",
        date: "1 week ago",
      },
      {
        user: "Dhruv Patel",
        rating: 4,
        comment:
          "Great doctor but appointments get full quickly. Book in advance.",
        date: "2 weeks ago",
      },
    ],
  },

  {
    id: 4,
    name: "Dr. Kavita Suresh",
    specialization: "Dermatologist",
    experience: 7,
    rating: 4.6,
    reviews: 167,
    fees: 800,
    city: "Bangalore",
    image: "https://images.pexels.com/photos/8460162/pexels-photo-8460162.jpeg",

    about:
      "Dr. Kavita Suresh specializes in skincare, acne treatment, and cosmetic dermatology. She provides personalized treatment plans and is known for her friendly and approachable nature.",

    languages: ["English", "Kannada", "Hindi"],

    slots: ["10:30 AM", "1:30 PM", "5:30 PM"],

    reviews: [
      {
        user: "Aishwarya Rao",
        rating: 5,
        comment: "Amazing results for my acne problem. Highly professional!",
        date: "5 days ago",
      },
      {
        user: "Naveen Gowda",
        rating: 4,
        comment: "Good doctor. Took time to understand my skin issues.",
        date: "2 weeks ago",
      },
      {
        user: "Lekha Menon",
        rating: 4,
        comment:
          "Treatment worked well but medicines were a bit expensive. Still worth it!",
        date: "3 weeks ago",
      },
    ],
  },

  {
    id: 5,
    name: "Dr. Rahul Desai",
    specialization: "General Physician",
    experience: 12,
    rating: 4.5,
    reviews: 210,
    fees: 600,
    city: "Pune",
    image: "https://images.pexels.com/photos/6129041/pexels-photo-6129041.jpeg",

    about:
      "A highly trusted general physician with 12 years of experience, Dr. Rahul Desai treats fever, infections, headaches, and lifestyle diseases. Patients value his calm behavior and detailed consultations.",

    languages: ["English", "Hindi", "Marathi"],

    slots: ["9:00 AM", "12:30 PM", "7:30 PM"],

    reviews: [
      {
        user: "Sneha Kulkarni",
        rating: 5,
        comment:
          "Very humble doctor. Helped me with a severe viral infection. Good guidance!",
        date: "3 days ago",
      },
      {
        user: "Gaurav Pawar",
        rating: 4,
        comment: "Explains symptoms properly. Good experience overall.",
        date: "1 week ago",
      },
      {
        user: "Rishi Patil",
        rating: 4,
        comment: "Nice doctor, listens patiently. No unnecessary medicines.",
        date: "2 weeks ago",
      },
    ],
  },

  {
    id: 6,
    name: "Dr. Sana Iqbal",
    specialization: "Gynecologist",
    experience: 10,
    rating: 4.9,
    reviews: 280,
    fees: 1200,
    city: "Hyderabad",
    image: "https://images.pexels.com/photos/7580255/pexels-photo-7580255.jpeg",

    about:
      "Dr. Sana Iqbal is a well-known gynecologist specializing in PCOS, pregnancy care, and fertility treatments. She is appreciated for her soft-spoken nature and patient counseling.",

    languages: ["English", "Hindi", "Telugu"],

    slots: ["10:00 AM", "1:00 PM", "6:30 PM"],

    reviews: [
      {
        user: "Nagma Khan",
        rating: 5,
        comment:
          "Very supportive throughout my pregnancy journey. Highly recommended!",
        date: "4 days ago",
      },
      {
        user: "Vandana Singh",
        rating: 5,
        comment:
          "Best gynecologist! Explains everything in detail and is very comforting.",
        date: "2 weeks ago",
      },
      {
        user: "Tarunitha Reddy",
        rating: 4,
        comment:
          "Good doctor, but waiting time is a bit long since many patients come.",
        date: "3 weeks ago",
      },
    ],
  },

  {
    id: 7,
    name: "Dr. Arvind Khanna",
    specialization: "Neurologist",
    experience: 18,
    rating: 4.8,
    reviews: 330,
    fees: 1800,
    city: "Chandigarh",
    image: "https://images.pexels.com/photos/8460346/pexels-photo-8460346.jpeg",

    about:
      "Dr. Arvind Khanna is a senior neurologist with 18+ years of experience. He specializes in migraine, nerve disorders, epilepsy, and neurological rehabilitation.",

    languages: ["English", "Hindi", "Punjabi"],

    slots: ["11:30 AM", "3:30 PM", "7:30 PM"],

    reviews: [
      {
        user: "Harpreet Kaur",
        rating: 5,
        comment:
          "His treatment worked wonders for my migraine. Very experienced doctor.",
        date: "2 days ago",
      },
      {
        user: "Kamal Jeet",
        rating: 4,
        comment:
          "Explains everything very clearly. Had a satisfying consultation.",
        date: "1 week ago",
      },
      {
        user: "Rajinder Singh",
        rating: 5,
        comment: "Calm, composed, and very skilled neurologist.",
        date: "3 weeks ago",
      },
    ],
  },

  {
    id: 8,
    name: "Dr. Priya Nair",
    specialization: "Pediatrician",
    experience: 8,
    rating: 4.7,
    reviews: 190,
    fees: 700,
    city: "Kochi",
    image: "https://images.pexels.com/photos/12663024/pexels-photo-12663024.jpeg",

    about:
      "Dr. Priya Nair is a pediatric specialist known for her friendly approach towards children. She handles vaccinations, child nutrition, and common childhood illnesses.",

    languages: ["English", "Malayalam"],

    slots: ["9:30 AM", "1:30 PM", "6:00 PM"],

    reviews: [
      {
        user: "Joseph Mathew",
        rating: 5,
        comment:
          "My kids love visiting her. Very kind and soft spoken. Excellent pediatrician!",
        date: "4 days ago",
      },
      {
        user: "Maria Dsouza",
        rating: 4,
        comment: "Good with kids. Explains everything patiently.",
        date: "1 week ago",
      },
      {
        user: "Anjana Nair",
        rating: 5,
        comment:
          "Child-friendly doctor. My daughter recovered quickly under her care.",
        date: "3 weeks ago",
      },
    ],
  },

  {
    id: 9,
    name: "Dr. Manish Goyal",
    specialization: "Dentist",
    experience: 5,
    rating: 4.4,
    reviews: 120,
    fees: 500,
    city: "Jaipur",
    image: "https://images.pexels.com/photos/8460029/pexels-photo-8460029.jpeg",

    about:
      "A young and skilled dentist, Dr. Manish Goyal specializes in root canals, braces, and cosmetic dentistry. He is known for painless treatments and modern equipment.",

    languages: ["English", "Hindi"],

    slots: ["10:00 AM", "2:00 PM", "6:00 PM"],

    reviews: [
      {
        user: "Simran Beniwal",
        rating: 5,
        comment:
          "My root canal was smooth and painless. Great doctor with steady hands!",
        date: "6 days ago",
      },
      {
        user: "Manav Sharma",
        rating: 4,
        comment:
          "Good dentist. Clinic is clean and well organized. Recommended!",
        date: "2 weeks ago",
      },
      {
        user: "Harsh Vardhan",
        rating: 4,
        comment: "Nice treatment but had to wait for 15 minutes.",
        date: "3 weeks ago",
      },
    ],
  },

  {
    id: 10,
    name: "Dr. Nisha Thomas",
    specialization: "Psychiatrist",
    experience: 13,
    rating: 4.9,
    reviews: 250,
    fees: 1600,
    city: "Chennai",
    image: "https://images.pexels.com/photos/8460156/pexels-photo-8460156.jpeg",

    about:
      "An experienced psychiatrist specializing in anxiety, depression, and therapy-based treatments. She creates a safe, comforting environment for patients.",

    languages: ["English", "Tamil"],

    slots: ["9:00 AM", "12:00 PM", "7:00 PM"],

    reviews: [
      {
        user: "Aravind Krishna",
        rating: 5,
        comment:
          "Very understanding and patient. Her sessions really helped me overcome anxiety.",
        date: "3 days ago",
      },
      {
        user: "Devi Ramesh",
        rating: 5,
        comment: "A very positive and warm doctor. Highly recommended.",
        date: "1 week ago",
      },
      {
        user: "Swetha Mohan",
        rating: 4,
        comment:
          "Very supportive. Sessions are expensive but worth every rupee.",
        date: "2 weeks ago",
      },
    ],
  },

  {
    id: 11,
    name: "Dr. Vikas Patil",
    specialization: "ENT Specialist",
    experience: 6,
    rating: 4.3,
    reviews: 110,
    fees: 650,
    city: "Nagpur",
    image: "https://images.pexels.com/photos/6749776/pexels-photo-6749776.jpeg",

    about:
      "Dr. Vikas Patil is an ENT specialist experienced in throat infections, ear pain, sinus issues, and allergy management.",

    languages: ["English", "Hindi", "Marathi"],

    slots: ["10:00 AM", "1:00 PM", "6:00 PM"],

    reviews: [
      {
        user: "Zoya Khan",
        rating: 5,
        comment: "Cured my sinus issue effectively. Soft-spoken and helpful.",
        date: "4 days ago",
      },
      {
        user: "Ramesh Gupta",
        rating: 4,
        comment: "Good ENT doctor, explained the allergy problem clearly.",
        date: "1 week ago",
      },
      {
        user: "Pooja Patil",
        rating: 4,
        comment:
          "Very polite doctor. Treatment worked but medicines were a bit costly.",
        date: "3 weeks ago",
      },
    ],
  },

  {
    id: 12,
    name: "Dr. Shalini Rao",
    specialization: "Ophthalmologist",
    experience: 14,
    rating: 4.8,
    reviews: 270,
    fees: 1000,
    city: "Surat",
    image: "https://images.pexels.com/photos/8460378/pexels-photo-8460378.jpeg",

    about:
      "A senior eye specialist with expertise in cataract, vision correction, and pediatric eye care. Known for accurate diagnosis and compassionate care.",

    languages: ["English", "Hindi", "Gujarati"],

    slots: ["10:30 AM", "2:00 PM", "6:30 PM"],

    reviews: [
      {
        user: "Ankit Solanki",
        rating: 5,
        comment: "Very experienced eye doctor. My vision checkup went smoothly.",
        date: "2 days ago",
      },
      {
        user: "Ritika Shah",
        rating: 5,
        comment:
          "Helped my mother with cataract treatment. Superb experience!",
        date: "1 week ago",
      },
      {
        user: "Dhaval Parmar",
        rating: 4,
        comment:
          "Good doctor, but the clinic gets crowded during peak hours.",
        date: "3 weeks ago",
      },
    ],
  },

  {
    id: 13,
    name: "Dr. Harsh Jain",
    specialization: "Gastroenterologist",
    experience: 16,
    rating: 4.6,
    reviews: 220,
    fees: 1400,
    city: "Lucknow",
    image: "https://images.pexels.com/photos/8460360/pexels-photo-8460360.jpeg",

    about:
      "A gastroenterology expert with 16+ years of experience in digestive issues, liver disorders, and stomach pain management.",

    languages: ["English", "Hindi"],

    slots: ["9:30 AM", "1:00 PM", "7:00 PM"],

    reviews: [
      {
        user: "Saurabh Yadav",
        rating: 5,
        comment:
          "Very knowledgeable. Helped me recover from long-term acidity problems.",
        date: "3 days ago",
      },
      {
        user: "Divya Mishra",
        rating: 4,
        comment:
          "Good doctor, explains deeply. Medicines took a few days to work.",
        date: "1 week ago",
      },
      {
        user: "Satyam Tiwari",
        rating: 5,
        comment:
          "Best gastroenterologist in the city. Very satisfied with the consultation.",
        date: "3 weeks ago",
      },
    ],
  },
];
