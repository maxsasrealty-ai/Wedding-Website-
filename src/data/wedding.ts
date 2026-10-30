/**
 * Centralized Wedding Configuration & Data Source
 * Couple: Anubhav ❤️ Kajal
 * Date: Thursday, 26 November 2026
 * Venue: B.S. Resort, Jalalpur Road, Khair, Aligarh, UP
 */

export interface WeddingEvent {
  id: string;
  titleHindi: string;
  titleEnglish: string;
  time: string;
  descriptionHindi: string;
  descriptionEnglish: string;
  icon: 'horse' | 'car' | 'ring' | 'feast';
  highlight?: boolean;
}

export interface FamilyMember {
  relationHindi: string;
  nameHindi: string;
  titleHindi?: string;
  relationEnglish?: string;
  nameEnglish?: string;
}

export const WEDDING_DATA = {
  couple: {
    groom: {
      nameHindi: 'चि० अनुभव',
      nameEnglish: 'Anubhav',
      fullName: 'Anubhav Singh',
      parentsHindi: 'श्रीमती उमेश देवी एवं श्री कमांडो ओ.पी. सिंह',
      parentsEnglish: 'Smt. Umesh Devi & Shri Commando O.P. Singh',
      relation: 'सुपुत्र (Son of)',
    },
    bride: {
      nameHindi: 'आयु० काजल',
      nameEnglish: 'Kajal',
      fullName: 'Kajal Charag',
      parentsHindi: 'श्रीमती मीरा देवी एवं श्री विनोद कुमार चारग',
      parentsEnglish: 'Smt. Meera Devi & Shri Vinod Kumar Charag',
      relation: 'सुपुत्री (Daughter of)',
    },
    monogram: 'A ❤️ K',
    photoUrl: '/anubhav_kajal_portrait.jpg',
    taglineHindi: 'दो आत्माएं, एक पवित्र बंधन',
    taglineEnglish: 'The Beginning of Forever',
    theme: 'Royal Ivory & Antique Gold',
  },
  date: {
    displayDate: 'Thursday, 26 November 2026',
    displayDateHindi: 'गुरुवार, 26 नवम्बर 2026',
    targetIso: '2026-11-26T00:00:00+05:30', // IST
    dayOfWeek: 'गुरुवार (Thursday)',
    shubhMuhurat: 'शुभ विवाह मुहूर्त: 26 नवम्बर 2026',
  },
  invitationMessage: {
    shloka: '॥ श्री गणेशाय नमः ॥',
    subShloka: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
    primaryHindi: 'शुभ विवाह एवं सगाई समारोह के पावन अवसर पर, हम सपरिवार आपको सादर आमंत्रित करते हैं। आपकी उपस्थिति एवं आशीर्वाद हमारे लिए अनमोल होंगे।',
    primaryEnglish: 'With the divine blessings of Lord Ganesha and our elders, we cordially invite you and your family to celebrate the auspicious wedding & Sagai ceremony of Anubhav and Kajal.',
    hospitalityNote: 'दर्शनाभिलाषी: समस्त परिवारजन एवं मित्रगण',
  },
  events: [
    {
      id: 'ghurchari',
      titleHindi: 'घुड़चढ़ी',
      titleEnglish: 'Ghurdhari / Procession',
      time: '4:00 PM',
      descriptionHindi: 'पारंपरिक घुड़चढ़ी एवं सेहराबंदी का मंगलमय उत्सव।',
      descriptionEnglish: 'Ceremonial procession of the groom adorned with auspicious turban & floral sehra.',
      icon: 'horse',
    },
    {
      id: 'baraat',
      titleHindi: 'बारात प्रस्थान',
      titleEnglish: 'Baraat Departure',
      time: '6:00 PM',
      descriptionHindi: 'बैंड-बाजों एवं ढोल की थाप पर भव्य बारात प्रस्थान।',
      descriptionEnglish: 'The joyful departure of the wedding baraat accompanied by traditional celebratory music.',
      icon: 'car',
    },
    {
      id: 'sagai',
      titleHindi: 'सगाई समारोह',
      titleEnglish: 'Sagai Samaroh (Ring Ceremony)',
      time: '6:00 PM',
      descriptionHindi: 'दो परिवारों के बीच प्रेम, विश्वास और अंगूठी पहनाने का मंगलमय सगाई समारोह।',
      descriptionEnglish: 'The auspicious ring ceremony celebrating eternal love, engagement and commitment.',
      icon: 'ring',
      highlight: true,
    },
    {
      id: 'preetibhoj',
      titleHindi: 'प्रीतिभोज',
      titleEnglish: 'Preetibhoj (Royal Wedding Banquet)',
      time: '8:00 PM',
      descriptionHindi: 'नवदंपति के आशीर्वाद उपरांत भव्य प्रीतिभोज एवं स्वागत।',
      descriptionEnglish: 'Grand traditional culinary banquet in honor of the newlyweds and esteemed guests.',
      icon: 'feast',
    },
  ] as WeddingEvent[],
  venue: {
    name: 'B.S. Resort',
    nameHindi: 'बी.एस. रिसॉर्ट',
    addressHindi: 'जलालपुर रोड, खैर क्षेत्र, जिला अलीगढ़, उत्तर प्रदेश',
    addressEnglish: 'Jalalpur Road, Khair Region, District Aligarh, Uttar Pradesh',
    landmark: 'Khair - Jalalpur Link Road',
    // Search query for Google Maps navigation
    mapsSearchQuery: 'B.S. Resort, Jalalpur Road, Khair, Aligarh, Uttar Pradesh',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=B.S.+Resort+Jalalpur+Road+Khair+Aligarh+Uttar+Pradesh',
  },
  story: [
    {
      title: 'A Sacred Destiny',
      titleHindi: 'संजोग और विश्वास',
      caption: 'When two families aligned in trust, love and shared values, a timeless bond was forged.',
      date: 'The Union of Families',
    },
    {
      title: 'Laughter & Shared Dreams',
      titleHindi: 'अनगिनत मीठी बातें',
      caption: 'From the first quiet conversation to dreaming of a lifelong home together under the stars.',
      date: 'Growing Together',
    },
    {
      title: 'The Seven Sacred Vows',
      titleHindi: 'सात जन्मों का साथ',
      caption: 'Ready to walk the sacred seven steps of love, duty, loyalty, happiness, and eternal respect.',
      date: '26 November 2026',
    },
  ],
};
