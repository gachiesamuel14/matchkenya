export const KENYAN_COUNTIES = [
  'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Kiambu', 'Machakos',
  'Kajiado', 'Uasin Gishu', 'Kilifi', 'Kwale', 'Nyeri', 'Meru',
  'Kakamega', 'Bungoma', 'Kisii', 'Migori', 'Homa Bay', 'Siaya',
  'Busia', 'Trans Nzoia', 'Bomet', 'Kericho', 'Narok', 'Laikipia',
  'Nyandarua', 'Muranga', 'Embu', 'Tharaka-Nithi', 'Kitui', 'Makueni',
  'Garissa', 'Wajir', 'Mandera', 'Marsabit', 'Isiolo', 'Samburu',
  'Turkana', 'West Pokot', 'Elgeyo-Marakwet', 'Nandi', 'Baringo',
  'Taita-Taveta', 'Tana River', 'Lamu', 'Vihiga'
];

export const INTERESTS = [
  'Hiking', 'Cooking', 'Music', 'Football', 'Travel', 'Reading',
  'Photography', 'Dancing', 'Gym', 'Church', 'Tech', 'Fashion',
  'Movies', 'Gaming', 'Art', 'Volunteering', 'Business', 'Farming'
];

export const TRIBES = [
  'Kikuyu', 'Luo', 'Luhya', 'Kalenjin', 'Kamba', 'Kisii', 'Meru',
  'Mijikenda', 'Somali', 'Maasai', 'Turkana', 'Embu', 'Taita',
  'Other / Prefer not to say'
];

export const RELIGIONS = [
  'Christian', 'Muslim', 'Hindu', 'Traditional', 'Spiritual but not religious', 'Prefer not to say'
];

// Mock users around Kenya with approximate coords
export const mockUsers = [
  {
    id: 1,
    name: 'Amina Wanjiku',
    age: 26,
    county: 'Nairobi',
    town: 'Westlands',
    bio: 'Software engineer who loves hiking Ngong Hills and good coffee. Looking for genuine connection 💚',
    interests: ['Tech', 'Hiking', 'Coffee', 'Travel'],
    tribe: 'Kikuyu',
    religion: 'Christian',
    photos: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop'],
    distance: 2.3,
    lat: -1.267,
    lng: 36.811,
    gender: 'female'
  },
  {
    id: 2,
    name: 'Brian Ochieng',
    age: 29,
    county: 'Nairobi',
    town: 'Kilimani',
    bio: 'Entrepreneur & weekend footballer. Always down for nyama choma and deep conversations.',
    interests: ['Football', 'Business', 'Music', 'Travel'],
    tribe: 'Luo',
    religion: 'Christian',
    photos: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'],
    distance: 4.1,
    lat: -1.292,
    lng: 36.782,
    gender: 'male'
  },
  {
    id: 3,
    name: 'Faith Chebet',
    age: 24,
    county: 'Uasin Gishu',
    town: 'Eldoret',
    bio: 'Medical student who runs every morning. Looking for someone who values growth and faith.',
    interests: ['Gym', 'Church', 'Reading', 'Volunteering'],
    tribe: 'Kalenjin',
    religion: 'Christian',
    photos: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop'],
    distance: 280,
    lat: 0.514,
    lng: 35.269,
    gender: 'female'
  },
  {
    id: 4,
    name: 'Hassan Ali',
    age: 31,
    county: 'Mombasa',
    town: 'Nyali',
    bio: 'Hotel manager who loves the ocean and good biryani. Seeking someone ready for adventure.',
    interests: ['Travel', 'Cooking', 'Music', 'Swimming'],
    tribe: 'Swahili / Other',
    religion: 'Muslim',
    photos: ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop'],
    distance: 440,
    lat: -4.043,
    lng: 39.668,
    gender: 'male'
  },
  {
    id: 5,
    name: 'Grace Achieng',
    age: 27,
    county: 'Kisumu',
    town: 'Milimani',
    bio: 'Teacher & proud Luo. Love lake sunsets, traditional music and meaningful talks.',
    interests: ['Music', 'Reading', 'Dancing', 'Church'],
    tribe: 'Luo',
    religion: 'Christian',
    photos: ['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop'],
    distance: 265,
    lat: -0.091,
    lng: 34.768,
    gender: 'female'
  },
  {
    id: 6,
    name: 'David Mwangi',
    age: 28,
    county: 'Kiambu',
    town: 'Thika',
    bio: 'Agritech founder. Passionate about farming innovation and exploring Kenya.',
    interests: ['Farming', 'Tech', 'Hiking', 'Business'],
    tribe: 'Kikuyu',
    religion: 'Christian',
    photos: ['https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop'],
    distance: 35,
    lat: -1.033,
    lng: 37.069,
    gender: 'male'
  },
  {
    id: 7,
    name: 'Njeri Kamau',
    age: 25,
    county: 'Nairobi',
    town: 'Karen',
    bio: 'Content creator & coffee lover. Always planning the next trip or photoshoot.',
    interests: ['Photography', 'Travel', 'Fashion', 'Coffee'],
    tribe: 'Kikuyu',
    religion: 'Spiritual but not religious',
    photos: ['https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop'],
    distance: 8.5,
    lat: -1.319,
    lng: 36.708,
    gender: 'female'
  },
  {
    id: 8,
    name: 'Kevin Otieno',
    age: 30,
    county: 'Nairobi',
    town: 'South B',
    bio: 'Civil engineer who plays guitar. Looking for someone fun, kind and ambitious.',
    interests: ['Music', 'Gym', 'Movies', 'Travel'],
    tribe: 'Luo',
    religion: 'Christian',
    photos: ['https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop'],
    distance: 5.2,
    lat: -1.310,
    lng: 36.837,
    gender: 'male'
  }
];

export const currentUser = {
  id: 0,
  name: 'You',
  age: 27,
  county: 'Nairobi',
  town: 'Kilimani',
  bio: 'Just joined MatchKenya!',
  interests: ['Travel', 'Music', 'Food'],
  tribe: '',
  religion: '',
  photos: [],
  lat: -1.2921,
  lng: 36.8219,
  gender: 'prefer-not'
};
