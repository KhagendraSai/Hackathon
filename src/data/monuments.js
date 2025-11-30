import tajMahalImg from '../assets/tajmahal.jpg';
import redFortImg from '../assets/redfort.jpg';
import qutubMinarImg from '../assets/qutubminar.jpg';
import indiaGateImg from '../assets/indiagate.jpg';

export const monuments = [
  {
    id: 1,
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    era: 'Mughal',
    image: tajMahalImg,
    history:
      'The Taj Mahal is a white marble mausoleum built by Mughal Emperor Shah Jahan in the 17th century in memory of his wife Mumtaz Mahal. It is one of the New Seven Wonders of the World and a UNESCO World Heritage Site.',
    facts: [
      'Construction started in 1632 and took around 22 years to complete.',
      'More than 20,000 artisans and craftsmen are believed to have worked on it.',
      'The monument appears to change colour depending on the time of day and moonlight.'
    ],
    gallery: [tajMahalImg]
  },
  {
    id: 2,
    name: 'Red Fort',
    location: 'Delhi',
    era: 'Mughal',
    image: redFortImg,
    history:
      'The Red Fort, or Lal Qila, was built by Emperor Shah Jahan in the mid‑17th century as the main residence of the Mughal emperors. It is an iconic symbol of India and the site from where the Prime Minister hoists the national flag on Independence Day.',
    facts: [
      'Construction began in 1638 and took about 10 years.',
      'The fort gets its name from its massive red sandstone walls.',
      'It is part of a UNESCO World Heritage Site complex in Delhi.'
    ],
    gallery: [redFortImg]
  },
  {
    id: 3,
    name: 'Qutub Minar',
    location: 'Delhi',
    era: 'Medieval',
    image: qutubMinarImg,
    history:
      'Qutub Minar is a towering minaret that forms part of the Qutub complex in Delhi. Its construction was started by Qutb‑ud‑din Aibak in the late 12th century and completed by his successors.',
    facts: [
      'It stands about 73 metres tall with five distinct storeys.',
      'The minar is built primarily from red sandstone with intricate carvings.',
      'The surrounding Qutub complex includes several other historic structures.'
    ],
    gallery: [qutubMinarImg]
  },
  {
    id: 4,
    name: 'India Gate',
    location: 'Delhi',
    era: 'Modern',
    image: indiaGateImg,
    history:
      'India Gate is a war memorial located in the heart of New Delhi. Designed by Sir Edwin Lutyens, it commemorates Indian soldiers who lost their lives in World War I and other conflicts.',
    facts: [
      'The foundation stone was laid in 1921 and the memorial was completed in 1931.',
      'The structure is 42 metres high and made of sandstone.',
      'The eternal flame Amar Jawan Jyoti was added after the 1971 Indo‑Pakistan war.'
    ],
    gallery: [indiaGateImg]
  }
];
