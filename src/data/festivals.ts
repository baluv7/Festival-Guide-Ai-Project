interface Festival {
  title: string;
  date: string;
  description: string;
  image: string;
  religion: string;
  videoId?: string;
}

export const FESTIVALS: Festival[] = [
  // Hindu Festivals
  {
    title: "Diwali",
    date: "October/November",
    description: "The festival of lights celebrates Lord Rama's return to Ayodhya. Homes are decorated with diyas, rangolis, and people exchange gifts and sweets.",
    image: "https://media.istockphoto.com/id/588223710/photo/diwali-oil-lamp.jpg?s=612x612&w=0&k=20&c=Mwl1S6C-CemmHoDPx4kwE8XKNcRRlZLRmKkpdfkM4VU=",
    religion: "Hindu",
    videoId: "IW_Ng_QI4m4"
  },
  {
    title: "Holi",
    date: "February/March",
    description: "The festival of colors marks the victory of good over evil and the arrival of spring. People play with colors and enjoy traditional sweets.",
    image: "https://media.istockphoto.com/id/1381030718/photo/barsana-holi-one-of-the-most-joyful-festival-of-india-this-is-birth-place-of-radha-lord.webp?a=1&b=1&s=612x612&w=0&k=20&c=jTAyFnheEbcFcs8YfqVjRMzlBdl0lGG7F0bcGJyG5tU=",
    religion: "Hindu",
    videoId: "GIhXlI-sEbc"
  },
  {
    title: "Krishna Janmashtami",
    date: "August/September",
    description: "Celebrates the birth of Lord Krishna with devotional songs, dances, and the tradition of Dahi Handi.",
    image: "https://media.istockphoto.com/id/2148393529/photo/vishukani-with-lord-krishna-sculpture.webp?a=1&b=1&s=612x612&w=0&k=20&c=P1aBKyh3WcEV59HZR7a2ASwBvkVAQemab-Xm4d0Uqcg=",
    religion: "Hindu",
    videoId: "aPIFlY27yW0"
  },
  {
    title: "Ganesh Chaturthi",
    date: "August/September",
    description: "A 10-day festival celebrating Lord Ganesha with elaborate pandals and immersion ceremonies.",
    image: "https://media.istockphoto.com/id/1064830024/photo/ganapati-visarjan-immersion-at-mumbai.jpg?s=612x612&w=0&k=20&c=0ldM1TnlZ9b-wttxozubdNr55d2W4C9m-UYC_M1VfFA=",
    religion: "Hindu",
    videoId: "AqwlVSgX77s"
  },
  {
    title: "Durga Puja",
    date: "September/October",
    description: "A celebration of Goddess Durga's victory over evil, featuring elaborate pandals and cultural performances.",
    image: "https://media.istockphoto.com/id/1044388000/photo/priest-worshipping-goddess-durga-durga-puja-festival-celebration.jpg?s=612x612&w=0&k=20&c=ZNjOXd3OlItDgIPnU7rHJfcH-r33Q0dEzOknQLIMnlw=",
    religion: "Hindu",
    videoId: "6mZMW5zBYtw"
  },

  // Muslim Festivals
  {
    title: "Eid ul-Fitr",
    date: "Based on Islamic Calendar",
    description: "Marks the end of Ramadan with prayers, feasts, and community gatherings.",
    image: "https://media.istockphoto.com/id/1152007743/vector/eid-al-fitr.jpg?s=612x612&w=0&k=20&c=fMK173tqBAwoAjCIazitlzUvWSV8qfpS092znZStpw8=",
    religion: "Muslim",
    videoId: "GjBlcEz1s_o"
  },
  {
    title: "Eid ul-Adha",
    date: "Based on Islamic Calendar",
    description: "Commemorates Prophet Ibrahim's devotion to Allah with prayers and charitable giving.",
    image: "https://media.istockphoto.com/id/1394859967/vector/eid-al-adha-festival-greeting-card-with-sacrificial-sheep-and-crescent-on-cloudy-night.jpg?s=612x612&w=0&k=20&c=AMRbI3JmgGZ9QiSq9YZAxT43hPZ1zq2uMHOW_Wh6skA=",
    religion: "Muslim",
    videoId: "cEkCoHsCDTo"
  },
  {
    title: "Muharram",
    date: "Based on Islamic Calendar",
    description: "A period of mourning commemorating the martyrdom of Imam Hussein.",
    image: "https://media.istockphoto.com/id/1479924546/vector/realistic-islamic-background-with-crescent-and-lanterns-background-for-islamic-religions-eid.jpg?s=612x612&w=0&k=20&c=pv6r5ft5UCscjGVJcB8Gf9RvKUhKUDNjz0C5XJBiy0o=",
    religion: "Muslim",
    videoId: "AZJxhf2g43w"
  },

  // Sikh Festivals
  {
    title: "Guru Nanak Jayanti",
    date: "November",
    description: "Celebrates the birth of Guru Nanak Dev Ji with prayers and langar.",
    image: "https://media.istockphoto.com/id/1426239503/vector/sikh-festival-happy-gurupurab-celebration-background.jpg?s=612x612&w=0&k=20&c=ERfC1PD9DdPEZbxs9utFTEU49ahdO417fu0bRT8L-04=",
    religion: "Sikh",
    videoId: "Spf8PJ8l0kg"
  },
  {
    title: "Baisakhi",
    date: "April 13/14",
    description: "The harvest festival and celebration of the Khalsa formation.",
    image: "https://media.istockphoto.com/id/485167204/vector/sikh-doing-bhangra-folk-dance-of-punjab-india-for-happy.jpg?s=612x612&w=0&k=20&c=HfdNtKm_8VZtS_kFL-S8j6t95sIUNmQNGBpIlUjpuWA=",
    religion: "Sikh",
    videoId: "TQ3Y4XIzKrc"
  },
  {
    title: "Lohri",
    date: "January 13",
    description: "A winter folk festival celebrated with bonfires and traditional songs.",
    image: "https://media.istockphoto.com/id/637415454/vector/happy-lohri-festival-of-punjab-india-background.jpg?s=612x612&w=0&k=20&c=uF8krBpZ2ust8vjluMnSPxHZk822j7VzuITm6wvQa_4=",
    religion: "Sikh",
    videoId: "KZnWfP0Nrjg"
  },

  // Christian Festivals
  {
    title: "Christmas",
    date: "December 25",
    description: "Celebrates the birth of Jesus Christ with midnight mass and festive decorations.",
    image: "https://media.istockphoto.com/id/1438906074/photo/christmas-tree-with-illumination-near-the-fireplace-home-decor.jpg?s=612x612&w=0&k=20&c=NL9k3Eog67dAocnaYnYBV8-eN1dbb9kAxndPR9E7NBc=",
    religion: "Christian",
    videoId: "XGhawKLEe2I"
  },
  {
    title: "Easter",
    date: "March/April",
    description: "Commemorates the resurrection of Jesus Christ with special prayers and celebrations.",
    image: "https://media.istockphoto.com/id/1302945698/photo/empty-tomb-with-crucifixion-at-sunrise-resurrection-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=BQnj-NBEb9l6JrMbLRFiCB8yKHC5CoYtLwn87bWyp4U=",
    religion: "Christian",
    videoId: "TOhFIMJXYk0"
  },
  {
    title: "Good Friday",
    date: "March/April",
    description: "Observes the crucifixion of Jesus Christ with solemn services.",
    image: "https://media.istockphoto.com/id/2078316255/video/have-a-blessed-good-friday-holy-animation-4k.jpg?s=640x640&k=20&c=b6B9cXQyn8fEVZN8RHFTCWnb1IUJGlKuzIiZjULAuYs=",
    religion: "Christian",
    videoId: "AjIi1uCTUCA"
  },

  // Jain Festivals
  {
    title: "Paryushan",
    date: "August/September",
    description: "Eight days of spiritual reflection and fasting.",
    image: "https://media.istockphoto.com/id/458469535/photo/cham-dance-india.jpg?s=612x612&w=0&k=20&c=46O3Yhd0HPTth9Ahg7zVnuMoAeiw23BLSxVl0aVO5Bo=",
    religion: "Jain",
    videoId: "H1aHicqK1iY"
  },
  {
    title: "Mahavir Jayanti",
    date: "March/April",
    description: "Celebrates the birth of Lord Mahavira with prayers and processions.",
    image: "https://media.istockphoto.com/id/1576127513/photo/a-couple-in-bright-dress-and-fake-horses-displaying-a-puppetry-cultural-show-during-the.jpg?s=612x612&w=0&k=20&c=PHXH5BkPOQshaIp9dPYcwBSQtdr6TMmQoYbKLWo1r0I=",
    religion: "Jain",
    videoId: "3Iab7iYPqj4"
  },

  // Buddhist Festivals
  {
    title: "Buddha Purnima",
    date: "April/May",
    description: "Celebrates the birth, enlightenment, and death of Gautama Buddha.",
    image: "https://media.istockphoto.com/id/1188396818/vector/siddhartha-gautama-enlightened-under-bodhi-tree.jpg?s=612x612&w=0&k=20&c=KheYy0j_UYPZvjbZ0iLZ-xAxj6zMS9GR4vpHU4EAWio=",
    religion: "Buddhist",
    videoId: "kcRicQpd4Wk"
  },
  {
    title: "Losar",
    date: "February/March",
    description: "Tibetan New Year celebrated with prayers and traditional performances.",
    image: "https://media.istockphoto.com/id/534924961/photo/cham-mystery-nepal.jpg?s=612x612&w=0&k=20&c=irYK3LjAA97ozHm92LQOoB85HuUZCVj9CxIoWI9yud8=",
    religion: "Buddhist",
    videoId: "4S5fymNfcSA"
  }
];