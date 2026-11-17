// Data cerita perjalanan PESONA INDO.
// Disalin dari kartu Blog (judul, kategori, dan gambar yang sama) dan
// dikembangkan menjadi artikel lengkap. Semua gambar memakai aset lokal
// di public/assets/ — tidak ada hotlink, tidak ada broken image.

export const stories = [
  {
    id: 'borobudur-dawn',
    category: 'Culture · Central Java',
    location: 'Magelang, Central Java',
    title: 'Borobudur at dawn: how to beat the crowds',
    subtitle: 'Enter before the crowds — and let the mist do the talking.',
    scriptQuote: '“Come early, walk slow, and let the mist do the talking.”',
    readTime: '6 min read',
    bestTime: 'May – Sep · 05.00–07.00',
    localGuide: 'Agus Santoso — Magelang',
    heroImage: '/assets/borobudur.jpg',
    heroAlt: 'Stupa Candi Borobudur saat matahari terbenam berkabut',
    summary:
      'Borobudur is at its quietest before the sun is fully up. Enter through the east gate before 05.30, climb counterclockwise, and save the open stupas for last — this is our guide’s route for the quietest sunrise in Magelang, followed by a slow morning in the villages below.',
    relatedDestId: 'borobudur',
    relatedLabel: 'Borobudur',
    sections: [
      {
        number: '01',
        title: 'The east gate, before 05.30',
        image: '/assets/borobudur.jpg',
        alt: 'Stupa Borobudur di tengah kabut pagi',
        content:
          'The day starts in the dark, and that is the point. Our guide Agus meets you at the east gate while the ticket counters are still quiet and the air smells of wet grass and incense from the villages nearby.\n\nWe walk in without rushing. The first terraces are almost empty, and the stone is still cool under your hands. By the time the sky turns pale gold, you are already above the mist — not fighting for a spot, just standing there while the Kedu plain slowly appears below.',
      },
      {
        number: '02',
        title: 'Climb counterclockwise, save the best for last',
        image: '/assets/bali.jpg',
        alt: 'Pura dan sawah terasering hijau di pagi hari',
        content:
          'Borobudur rewards a slow, counterclockwise climb. Each level tells a different part of the story, carved in reliefs that are easy to miss if you hurry past them. Agus stops at the panels most visitors walk by — a ship, a market, a forest — and suddenly the whole temple reads like a book.\n\nWe save the open stupas for last. Sit for a moment beside one, listen to the birds, and watch the light move across the stone. This is the part of the morning people remember longest, and it only happens because we arrived early.',
      },
      {
        number: '03',
        title: 'Down to the villages, while the day is still young',
        image: '/assets/bromo.jpg',
        alt: 'Matahari terbit keemasan di atas pegunungan',
        content:
          'By 08.00 the crowds are arriving — and we are already on our way down. The morning continues in Candirejo village, where breakfast is simple and unhurried: warm tea, fried banana, and rice cooked over wood fire.\n\nIf you have energy left, we cycle past rice fields and small batik workshops before the heat sets in. Borobudur is famous for its sunrise, but the quiet hours after it are just as good — and they belong to the people who live here.',
      },
    ],
  },
  {
    id: 'padar-one-day-sail',
    category: 'Island Guide · East Nusa Tenggara',
    location: 'Labuan Bajo, East Nusa Tenggara',
    title: 'Padar, Pink Beach, Komodo: the perfect one-day sail',
    subtitle: 'Three bays, three sand colors, one unforgettable loop.',
    scriptQuote: '“Three bays, three sand colors, one unforgettable loop.”',
    readTime: '7 min read',
    bestTime: 'Apr – Jun · Sep – Nov',
    localGuide: 'Maria Fernandez — Labuan Bajo',
    heroImage: '/assets/padar.jpg',
    heroAlt: 'Pulau Padar, Taman Nasional Komodo, dilihat dari ketinggian',
    summary:
      'Three bays, three sand colors, one unforgettable loop. This is how we sequence Labuan Bajo’s icons — Padar at first light, Pink Beach at midday, and Komodo at golden hour — so you hike in cool air, swim when the water is clearest, and sail home as the sky turns pink.',
    relatedDestId: 'labuan-bajo',
    relatedLabel: 'Labuan Bajo',
    sections: [
      {
        number: '01',
        title: 'Padar at first light',
        image: '/assets/padar.jpg',
        alt: 'Bukit dan teluk Pulau Padar di Taman Nasional Komodo',
        content:
          'We leave Labuan Bajo before sunrise, when the harbour is still half asleep and the boat cuts through flat water. Padar is first for a reason: the climb is short but steep, and it is far better done before the sun is high.\n\nFrom the top, three bays curve away in three different colors — white, black, and pink sand — and for a few minutes the whole viewpoint is yours. Bring water, wear proper shoes, and take your time on the way down. The boat, and breakfast, will be waiting.',
      },
      {
        number: '02',
        title: 'Pink Beach, when the water is clearest',
        image: '/assets/raja-ampat.jpg',
        alt: 'Laguna turquoise dan pulau karst di laut jernih',
        content:
          'By midday we anchor at Pink Beach, where the sand really does blush pink — crushed red coral mixed with white sand, brightest in the sun. This is the swimming stop, so jump in: the water is shallow, warm, and clear enough to see reef fish without going far from shore.\n\nOur crew sets up lunch on board while you snorkel. Keep an eye out for turtles near the reef edge, and save some energy — the afternoon is for Komodo, and the walk there is in the heat.',
      },
      {
        number: '03',
        title: 'Komodo at golden hour',
        image: '/assets/lombok.jpg',
        alt: 'Teluk berpasir putih dan air turquoise di pesisir Lombok',
        content:
          'We reach Rinca in the late afternoon, when the dragons are most likely to be out and the light is soft. A ranger walks with us the whole way, keeping a respectful distance and telling us which dragon is which — they all have names, and histories.\n\nThe sail back to Labuan Bajo is the quiet ending the day deserves. The sun drops behind the islands, the boat slows down, and nobody is in a hurry to check their phone. One day, three islands, and a loop you will want to do again.',
      },
    ],
  },
  {
    id: 'lombok-southern-bays',
    category: 'Beaches · West Nusa Tenggara',
    location: 'South Lombok, West Nusa Tenggara',
    title: 'Lombok beyond the Gilis: five quiet southern bays',
    subtitle: 'A slower side of Lombok worth the drive.',
    scriptQuote: '“Slow down — the best bays are the ones you drive to.”',
    readTime: '5 min read',
    bestTime: 'Apr – Oct · low tide mornings',
    localGuide: 'Lalu Wirawan — South Lombok',
    heroImage: '/assets/lombok.jpg',
    heroAlt: 'Teluk berpasir putih dan air turquoise di pesisir Lombok',
    summary:
      'Selong Belanak at low tide, Mawun’s horseshoe cove, and a warung with the best ikan bakar on the coast. This is a slower side of Lombok worth the drive — five quiet southern bays, no crowds, and a day that moves at the pace of the tide.',
    relatedDestId: 'lombok',
    relatedLabel: 'Lombok',
    sections: [
      {
        number: '01',
        title: 'Selong Belanak at low tide',
        image: '/assets/lombok.jpg',
        alt: 'Teluk Selong Belanak saat air surut',
        content:
          'We start at Selong Belanak, and we time it with the tide. At low tide the bay opens up into a wide, flat stretch of white sand, perfect for a first swim and for beginner surfers learning on gentle waves.\n\nThere is no rush here. Fishermen mend nets in the shade, kids play football on the sand, and the warungs open slowly. Order a young coconut, sit for a while, and let the day set its own pace — that is the whole point of the south coast.',
      },
      {
        number: '02',
        title: 'Mawun’s horseshoe cove',
        image: '/assets/bali.jpg',
        alt: 'Teluk hijau dengan sawah dan pura di pesisir',
        content:
          'A short drive east brings us to Mawun, a near-perfect horseshoe bay framed by green hills. The water is calmer here, and the sand is finer — the kind of beach where you end up staying longer than you planned.\n\nOur guide Lalu knows the best spot to sit: under the trees at the far end, away from the boats. Swim, read, or do nothing at all. In the south, doing nothing is a perfectly good plan.',
      },
      {
        number: '03',
        title: 'Ikan bakar, and the drive home',
        image: '/assets/padar.jpg',
        alt: 'Teluk dan perbukitan hijau di pesisir selatan',
        content:
          'No southern Lombok day is complete without ikan bakar — grilled fish, fresh from the morning boats, eaten with rice, sambal, and lime at a small warung by the road. Lalu orders for the table, and the fish arrives still sizzling.\n\nThe drive home is part of the trip: rice fields, hills, and the sun dropping low over the coast. Five bays, one slow day, and a reminder that Lombok’s quiet side is worth the extra drive south.',
      },
    ],
  },
  {
    id: 'toraja-rambu-solo',
    category: 'Culture · South Sulawesi',
    location: 'Rantepao, South Sulawesi',
    title: 'Tana Toraja: Rambu Solo and the stone villages of Kete Kesu',
    subtitle: 'A culture that honours the dead by celebrating life.',
    scriptQuote: '“In Toraja, a funeral is not a goodbye — it is a homecoming.”',
    readTime: '8 min read',
    bestTime: 'Jun – Sep · dry season',
    localGuide: 'Yohanis Sanda — Rantepao',
    heroImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    heroAlt: 'Pegunungan berkabut di dataran tinggi Tana Toraja',
    summary:
      'High in the mountains of Sulawesi, the Toraja people build boat-shaped houses, carve their dead into cliffs, and celebrate Rambu Solo — a funeral festival that can last for days. This is a journey into Kete Kesu, Lemo, and a culture that has kept its own rhythm for centuries.',
    relatedDestId: 'toraja',
    relatedLabel: 'Tana Toraja',
    sections: [
      {
        number: '01',
        title: 'Kete Kesu, the village that time kept',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
        alt: 'Sawah terasering hijau dan rumah tradisional di dataran tinggi',
        content:
          'Kete Kesu is the first stop, and it sets the tone for everything that follows. Rows of tongkonan houses stand with their boat-shaped roofs pointing at the sky, their wooden walls painted with buffalo horns and geometric patterns in red, black, and white.\n\nOur guide Yohanis grew up two valleys away, and he reads the village like a family album. Each house, he explains, is not just a home — it is a statement about who a family is, where they came from, and whom they honour. The rice barns stand opposite, smaller but just as proud.',
      },
      {
        number: '02',
        title: 'Rambu Solo, a farewell like no other',
        image: '/assets/borobudur.jpg',
        alt: 'Candi batu kuno di pagi berkabut',
        content:
          'Rambu Solo is the ceremony that brings Toraja families home from across Indonesia. It is a funeral, but it feels like a festival: buffalo processions, bamboo pavilions, chanting, and hundreds of relatives sharing food for days. Death, here, is not hurried — it is honoured properly, and together.\n\nWe attend as respectful guests, never as spectators. Yohanis explains when to sit, when to stand, and what the gifts mean. The most moving moment is quiet: a family placing offerings beside the cliff burial at Lemo, where wooden tau tau figures stand guard over the dead.',
      },
      {
        number: '03',
        title: 'Batutumonga, above the clouds',
        image: '/assets/bromo.jpg',
        alt: 'Matahari terbit keemasan di atas pegunungan',
        content:
          'On the last morning we climb to Batutumonga before dawn. The village sits on the shoulder of Mount Sesean, and from here the whole of Toraja spreads out below — rice terraces, tongkonan roofs, and a sea of cloud filling the valleys.\n\nAs the sun rises, the cloud slowly lifts, and the mountains appear one by one. It is a fitting end to the journey: a culture that looks up to the mountains, and a morning that makes you understand why.',
      },
    ],
  },
  {
    id: 'banda-spice-route',
    category: 'Island Guide · Maluku',
    location: 'Banda Neira, Maluku',
    title: 'Banda Neira: spice, lava, and the island time forgot',
    subtitle: 'Once, nutmeg here was worth more than gold.',
    scriptQuote: '“The whole world came here for nutmeg — and then forgot to leave.”',
    readTime: '7 min read',
    bestTime: 'Mar – Apr · Oct – Nov',
    localGuide: 'Rian Pattipeilohy — Banda Neira',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    heroAlt: 'Kota pesisir dan tebing di tepi laut Kepulauan Banda',
    summary:
      'Four centuries ago, these tiny islands were the most valuable real estate on Earth — the only place nutmeg grew. Today Banda Neira is quiet, green, and surrounded by some of the clearest water in Indonesia, with a volcano you can dive over and a fort you can walk through at sunset.',
    relatedDestId: 'banda',
    relatedLabel: 'Banda Neira',
    sections: [
      {
        number: '01',
        title: 'The old town, at walking pace',
        image: '/assets/bali.jpg',
        alt: 'Pura dan sawah terasering hijau di pagi hari',
        content:
          'Banda Neira is small enough to cross on foot in an afternoon, and that is exactly how you should see it. Colonial houses with peeling paint, a nutmeg grove behind almost every garden wall, and the smell of cloves drying in the sun.\n\nOur guide Rian stops at the old Dutch church and the house where nutmeg traders once counted their fortunes. The history is heavy — wars were fought over these islands — but the town itself is gentle, and the people who live here are proud of it without ever showing off.',
      },
      {
        number: '02',
        title: 'Diving over the lava flow',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
        alt: 'Snorkeler berenang di laut jernih Kepulauan Derawan',
        content:
          'Gunung Api Banda last erupted in 1988, and its lava flowed straight into the sea. Today that black slope is one of the most extraordinary dive sites in Indonesia: hard corals growing on fresh lava, schools of fish circling the drop-off, and visibility that can reach forty metres.\n\nWe dive in the morning, when the water is calmest. Even snorkellers can see the story — dark lava below, bright coral above, and the volcano itself watching from the shore. It is geology you can swim through.',
      },
      {
        number: '03',
        title: 'Sunset from Fort Belgica',
        image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
        alt: 'Langit senja keemasan di atas kepulauan',
        content:
          'Fort Belgica was built to guard the nutmeg, and it still guards the best view in Banda. We climb up in the late afternoon, when the light turns the whole bay gold and Gunung Api stands sharp against the sky.\n\nDown below, the fishing boats come home and the town lights come on one by one. Nutmeg made this place famous, but it is the quiet — the slow evenings, the clear water, the volcano on the horizon — that makes people stay.',
      },
    ],
  },
  {
    id: 'belitung-granite-coast',
    category: 'Beaches · Bangka Belitung',
    location: 'Tanjung Pandan, Bangka Belitung',
    title: 'Belitung: granite boulders, tiny islands, and coffee in Manggar',
    subtitle: 'The island the rainbow trout forgot to tell you about.',
    scriptQuote: '“Granite giants, glass-clear water, and coffee at four in the afternoon.”',
    readTime: '6 min read',
    bestTime: 'Apr – Oct · dry season',
    localGuide: 'Dewi Lestari — Tanjung Pandan',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    heroAlt: 'Pantai tropis berpasir putih dengan air turquoise di Belitung',
    summary:
      'Belitung is famous for one image: giant granite boulders standing in turquoise water. But the island is more than a postcard — it is a chain of tiny islands to hop between, a lake the colour of milky jade, and a coffee culture in Manggar where the whole town gathers at four in the afternoon.',
    relatedDestId: 'belitung',
    relatedLabel: 'Belitung',
    sections: [
      {
        number: '01',
        title: 'Tanjung Tinggi and the granite giants',
        image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1200&q=80',
        alt: 'Pantai berpasir putih dengan air turquoise jernih',
        content:
          'Tanjung Tinggi is where Belitung first makes sense. Enormous granite boulders, smoothed by centuries of wind and sea, rise out of white sand and shallow turquoise water. You can climb them, sit on them, and swim between them — all before lunch.\n\nOur guide Dewi knows which boulder gives the best view at midday and which cove stays calm when the wind picks up. Bring reef shoes: the sand is soft, but the granite is not.',
      },
      {
        number: '02',
        title: 'Island-hopping to Lengkuas',
        image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1200&q=80',
        alt: 'Pantai tropis dari udara dengan air turquoise',
        content:
          'From Tanjung Kelayang we take a small wooden boat out to the islands. Lengkuas is the famous one — a white lighthouse from 1882 standing on a sandbar, with starfish scattered in the shallows around it.\n\nWe snorkel off the boat, eat grilled fish on a quiet beach, and hop between two more islands before the afternoon wind rises. The whole day costs less than a fancy dinner in Jakarta, and it feels like a private archipelago.',
      },
      {
        number: '03',
        title: 'Danau Kaolin and coffee in Manggar',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
        alt: 'Pantai berpasir putih dengan pohon kelapa',
        content:
          'On the way back we stop at Danau Kaolin, a former tin mine turned into a lake of milky blue-green water against white kaolin cliffs. It looks unreal in photographs, and somehow even stranger in person.\n\nThe day ends in Manggar, the old tin town, where coffee is a ritual. At four o’clock the warung kopi fill up — strong black coffee, sweet condensed milk, and conversations that last until dark. Order a second cup. Nobody here is in a hurry.',
      },
    ],
  },
  {
    id: 'wae-rebo-cloud-village',
    category: 'Highlands & Heritage · Flores',
    location: 'Manggarai, Flores, East Nusa Tenggara',
    title: 'Wae Rebo: hiking through mist to the village above the clouds',
    subtitle: 'Seven cone houses, one long climb, and a night you will never forget.',
    scriptQuote: '“You do not arrive in Wae Rebo — you earn it, one step at a time.”',
    readTime: '7 min read',
    bestTime: 'Apr – Oct · dry season',
    localGuide: 'Fransiskus Nggole — Flores',
    heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    heroAlt: 'Jalur hutan hijau menuju Desa Adat Wae Rebo di Flores',
    summary:
      'Wae Rebo sits at 1,200 metres in the mountains of Flores, reachable only on foot through forest and mist. Seven cone-shaped Mbaru Niang houses stand in a circle above the clouds, and visitors sleep inside one of them. This is the trek, the arrival, and the night in between.',
    relatedDestId: 'wae-rebo',
    relatedLabel: 'Wae Rebo',
    sections: [
      {
        number: '01',
        title: 'The climb through the mist',
        image: '/assets/bromo.jpg',
        alt: 'Matahari terbit keemasan di atas pegunungan',
        content:
          'The trek starts in Denge village, and for the first hour it is all uphill through coffee gardens and forest. Then the mist comes in — soft, white, and suddenly everywhere — and the trail becomes a tunnel of green.\n\nOur guide Fransiskus sets a slow, steady pace and stops often: for water, for wild coffee cherries, for the view when the mist briefly lifts. The climb takes about two and a half hours. Nobody rushes it, and nobody should.',
      },
      {
        number: '02',
        title: 'Seven houses above the clouds',
        image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80',
        alt: 'Perkemahan di pegunungan saat pagi berkabut',
        content:
          'Then, without warning, the forest opens — and there it is. Seven tall cone houses, their thatched roofs reaching for the sky, standing in a circle on a green plateau. Wae Rebo looks exactly like the photographs, and nothing like them at the same time.\n\nWe are welcomed with a ceremony in the main house, then shown where we will sleep: on woven mats inside a Mbaru Niang, under a roof five storeys high. The village elder tells stories by the fire as the mist rolls back in below us.',
      },
      {
        number: '03',
        title: 'Morning coffee, and the walk down',
        image: '/assets/bali.jpg',
        alt: 'Pura dan sawah terasering hijau di pagi hari',
        content:
          'Morning in Wae Rebo starts with coffee — Flores coffee, grown on the slopes we climbed yesterday, brewed over a wood fire and served strong and black. The mist is still below the village, and the sun comes up over a sea of cloud.\n\nWe walk down slowly, saying goodbye to the families who hosted us. The trek back feels shorter, but the village stays with you much longer. Wae Rebo is not a viewpoint you visit; it is a night you live.',
      },
    ],
  },
  {
    id: 'derawan-jellyfish-lake',
    category: 'Island Guide · East Kalimantan',
    location: 'Derawan Islands, East Kalimantan',
    title: 'Derawan & Kakaban: swimming with stingless jellyfish and green turtles',
    subtitle: 'A lake full of jellyfish that cannot sting you.',
    scriptQuote: '“Float still, and the jellyfish will come to you — they have nothing to fear.”',
    readTime: '6 min read',
    bestTime: 'Mar – Oct · calm seas',
    localGuide: 'Siti Rahma — Derawan',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    heroAlt: 'Snorkeler berenang di laut jernih Kepulauan Derawan',
    summary:
      'Off the east coast of Kalimantan, a chain of coral islands holds two of Indonesia’s strangest swims: a lake full of stingless jellyfish, and a reef where green turtles glide past you like slow aircraft. This is Derawan, Kakaban, and Maratua — three islands, one unforgettable loop.',
    relatedDestId: 'derawan',
    relatedLabel: 'Derawan',
    sections: [
      {
        number: '01',
        title: 'Kakaban Lake, the jellyfish sea',
        image: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=1200&q=80',
        alt: 'Penyelam di bawah laut biru jernih',
        content:
          'Kakaban is an island with a lake in the middle, and the lake is full of jellyfish — thousands of them, pulsing gently in green water. Cut off from the sea for millennia, they lost their sting. You can swim among them, and they simply drift around you.\n\nThe rule is simple: no fins, no sunscreen, no touching. Float on your back, stay still, and watch the light filter down through the water. It is one of the strangest and calmest swims in the world.',
      },
      {
        number: '02',
        title: 'Green turtles of Derawan',
        image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80',
        alt: 'Penyu laut berenang di bawah air biru',
        content:
          'Back on Derawan island, the turtles do the work. Green turtles come here to feed and rest, and on a good afternoon you can see a dozen of them from a single snorkel — gliding along the reef, surfacing for air, completely unbothered by visitors.\n\nOur guide Siti knows the cleaning stations where turtles queue up for small fish to pick them clean. We watch from a distance, keep our hands to ourselves, and let the turtles decide how close we get.',
      },
      {
        number: '03',
        title: 'Maratua, the island at the edge',
        image: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1200&q=80',
        alt: 'Ombak laut biru menggulung di tepi karang',
        content:
          'The last day belongs to Maratua, the long atoll at the edge of the chain. Its outer wall drops away into deep blue, and the diving there — for those who dive — is among the best in Indonesia: barracuda, reef sharks, and manta rays on the current.\n\nEven from the boat, Maratua feels remote. The water changes colour every hour, the beach is empty, and the sunset on the way home is the kind you remember for years.',
      },
    ],
  },
  {
    id: 'harau-minangkabau',
    category: 'Highlands & Heritage · West Sumatra',
    location: 'Bukittinggi, West Sumatra',
    title: 'Bukittinggi & Lembah Harau: canyons, Minangkabau tradition, and Nagari food',
    subtitle: 'Where the cliffs are a hundred metres high and lunch is an event.',
    scriptQuote: '“In Minangkabau, you do not just eat — you are welcomed to the table.”',
    readTime: '6 min read',
    bestTime: 'Apr – Oct · dry season',
    localGuide: 'Rizky Pratama — Bukittinggi',
    heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    heroAlt: 'Sinar matahari menembus lembah pegunungan Lembah Harau',
    summary:
      'West Sumatra is a land of canyons and curved roofs, where the Minangkabau people have kept their matrilineal traditions and their food — rendang, gulai, and a dozen dishes served all at once — for centuries. This is Harau Valley, Ngarai Sianok, and the table at the end of the day.',
    relatedDestId: 'harau',
    relatedLabel: 'Bukittinggi & Harau',
    sections: [
      {
        number: '01',
        title: 'The cliffs of Lembah Harau',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
        alt: 'Puncak gunung menjulang di bawah langit biru',
        content:
          'Lembah Harau is a valley walled by granite cliffs a hundred metres high, with waterfalls falling straight out of the rock and rice fields spread across the floor. It is one of the most dramatic landscapes in Sumatra, and one of the least visited.\n\nWe walk the valley floor in the morning, when the light is soft and the waterfalls are at their fullest. Our guide Rizky points out the climbing routes, the hidden pools, and the farmhouses where the valley’s families have lived for generations.',
      },
      {
        number: '02',
        title: 'Ngarai Sianok and the houses of Bukittinggi',
        image: '/assets/borobudur.jpg',
        alt: 'Candi batu kuno di pagi berkabut',
        content:
          'From Harau we drive to Bukittinggi, the highland town at the edge of Ngarai Sianok — a deep green canyon that cuts through the city itself. The viewpoint at dawn is worth the early start: mist in the canyon, the volcanoes Singgalang and Marapi on the horizon.\n\nIn town, the Minangkabau houses steal the show. Their roofs curve up like buffalo horns, and the best examples are also the most welcoming — family homes where the door is open and the tea is already on.',
      },
      {
        number: '03',
        title: 'Lunch, Minangkabau style',
        image: '/assets/bali.jpg',
        alt: 'Pura dan sawah terasering hijau di pagi hari',
        content:
          'No visit to Bukittinggi is complete without a proper Nagari lunch. The table fills up all at once: rendang slow-cooked for hours, gulai ayam, sambal lado, cassava leaves, and rice — served family-style, with everyone reaching across each other.\n\nRizky explains the etiquette as we eat: eat with your right hand, take what you need, and never rush. In Minangkabau culture, a meal is not just food. It is how a community says: you belong here, for as long as you are at this table.',
      },
    ],
  },
  {
    id: 'toba-samosir',
    category: 'Culture · North Sumatra',
    location: 'Samosir Island, North Sumatra',
    title: 'Danau Toba & Samosir: the lake that holds a whole culture',
    subtitle: 'A supervolcano, an island, and the Batak people who call it home.',
    scriptQuote: '“Toba is not just a lake — it is the beginning of the Batak story.”',
    readTime: '6 min read',
    bestTime: 'May – Sep · dry season',
    localGuide: 'Hotman Sinaga — Samosir',
    heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    heroAlt: 'Danau vulkanik Toba dengan pegunungan hijau di sekelilingnya saat senja',
    summary:
      'Seventy-four thousand years ago, a supervolcano blew its top off and left the largest volcanic lake on Earth. In the middle of it sits Samosir Island, home of the Batak people — their boat-shaped houses, their stone villages, and a way of life that has survived the eruption and everything since.',
    relatedDestId: 'toba',
    relatedLabel: 'Danau Toba',
    sections: [
      {
        number: '01',
        title: 'Crossing to Samosir',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
        alt: 'Kano merah di atas danau tenang di pagi hari',
        content:
          'The ferry from Parapat takes less than an hour, but the crossing feels like a border. The mainland falls away, the lake opens up, and Samosir rises ahead — green hills, Batak villages, and the volcano Pusuk Buhit, where Batak legend says the world began.\n\nOur guide Hotman meets us at the jetty. He is Batak, born on this island, and he tells the story of Toba the way his grandmother told it to him: not as geology, but as family history.',
      },
      {
        number: '02',
        title: 'Tomok and the stone villages',
        image: '/assets/borobudur.jpg',
        alt: 'Candi batu kuno di pagi berkabut',
        content:
          'Tomok is the cultural heart of Samosir. Here stand the old stone chairs where Batak kings once held court, and the tomb of King Sidabutar, carved from a single block of stone. The houses nearby still carry the old boat-shaped roofs, and the carvings on their walls tell stories of buffalo, lizards, and ancestors.\n\nWe spend the afternoon in a weaving village, watching ulos cloth being made on wooden looms. Each pattern belongs to a family, and each colour means something. Hotman buys a small piece for his daughter — a pattern, he says, that means home.',
      },
      {
        number: '03',
        title: 'Holbung Hill at sunset',
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
        alt: 'Danau pegunungan dengan pantulan langit senja',
        content:
          'The last stop is Holbung Hill, a grassy ridge above the lake that has become the island’s favourite sunset spot. The climb is short and the reward is enormous: the whole of Lake Toba spread out below, Samosir’s hills in every direction, and the sun dropping into the water.\n\nWe sit there until the light goes, sharing the hill with a few local families and their children. Toba is the biggest lake in Southeast Asia, but from Holbung it feels personal — a lake that belongs to the people who live on it.',
      },
    ],
  },
  {
    id: 'ijen-blue-fire',
    category: 'Highlands & Heritage · East Java',
    location: 'Banyuwangi, East Java',
    title: 'Kawah Ijen: chasing blue fire under the stars',
    subtitle: 'One of only two places on Earth where the mountain burns blue.',
    scriptQuote: '“At two in the morning, the mountain lights itself — and you forget the cold.”',
    readTime: '5 min read',
    bestTime: 'May – Oct · dry season',
    localGuide: 'Budi Santoso — Banyuwangi',
    heroImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    heroAlt: 'Langit malam berbintang di atas pegunungan Kawah Ijen',
    summary:
      'Kawah Ijen is a volcano with a secret: at night, sulphur gas ignites into electric-blue flames inside its crater — one of only two blue-fire volcanoes on Earth. The trek starts at midnight, the reward is dawn over a turquoise acid lake, and the miners who work here are the toughest people you will ever meet.',
    relatedDestId: 'ijen',
    relatedLabel: 'Kawah Ijen',
    sections: [
      {
        number: '01',
        title: 'The midnight climb',
        image: '/assets/bromo.jpg',
        alt: 'Matahari terbit keemasan di atas pegunungan',
        content:
          'We start at midnight, headlamps on, gas masks in hand. The trail climbs steadily through the dark, and the only sounds are boots on rock and the wind in the trees. Our guide Budi has done this climb hundreds of times, and he sets a pace that keeps everyone warm without wearing anyone out.\n\nHalfway up, the stars come out — thousands of them, with no city light for hours in any direction. It is cold, it is dark, and it is completely worth it.',
      },
      {
        number: '02',
        title: 'Blue fire in the crater',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
        alt: 'Langit malam berbintang di atas pegunungan Kawah Ijen',
        content:
          'At the crater rim, we put on our masks and descend into the smoke. Down below, the blue fire is burning — electric-blue flames licking out of cracks in the rock, where sulphur gas meets the air and ignites. It is eerie, beautiful, and unlike anything else on Earth.\n\nThe miners are already here, working in the same smoke with baskets of yellow sulphur on their backs. Budi introduces us to one of them, and we listen to his story: the weight, the heat, the pay, and why he keeps coming back.',
      },
      {
        number: '03',
        title: 'Sunrise over the acid lake',
        image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
        alt: 'Langit senja keemasan di atas kepulauan',
        content:
          'As dawn breaks, the smoke thins and the crater reveals itself: a vast turquoise lake, acidic enough to dissolve metal, sitting in a bowl of yellow rock. The sun hits the water, and for a few minutes the whole crater glows.\n\nWe climb back to the rim and watch the light spread across East Java — the volcanoes, the plantations, the sea in the distance. Then we walk down for breakfast, tired, cold, and already talking about coming back.',
      },
    ],
  },
]

export const findStory = (id) => stories.find((s) => s.id === id) ?? null

export const storyByBlogTitle = (title) =>
  stories.find((s) => s.title === title) ?? null

