import './style.css';

const LANGUAGE_STORAGE_KEY = 'grf-language';

const PAGE_TITLES = {
    '/': {
        en: 'GINA Royal Foundation - Empowering Widows in Kenya',
        de: 'GINA Royal Foundation - Witwen in Kenia stärken'
    },
    '/about.html': {
        en: 'About Us - GINA Royal Foundation | Empowering Widows in Kenya',
        de: 'Über Uns - GINA Royal Foundation | Witwen in Kenia stärken'
    },
    '/mission.html': {
        en: 'Mission & Values - GINA Royal Foundation | Hope, Resilience, Courage, Empowerment',
        de: 'Mission & Werte - GINA Royal Foundation | Hoffnung, Resilienz, Mut, Selbstermächtigung'
    },
    '/projects.html': {
        en: 'Our Projects - GINA Royal Foundation | Sustainable Programs for Widows in Kenya',
        de: 'Unsere Projekte - GINA Royal Foundation | Nachhaltige Programme für Witwen in Kenia'
    },
    '/support.html': {
        en: 'Support Us - GINA Royal Foundation | Partnership & Donation Opportunities',
        de: 'Unterstützen Sie Uns - GINA Royal Foundation | Partnerschaften & Spendenmöglichkeiten'
    }
};

const TRANSLATIONS_DE = {
    'Overcome grief and claim your dignity': 'Überwinde Trauer und gewinne deine Würde zurück',
    'Home': 'Startseite',
    'About': 'Über uns',
    'Mission & Values': 'Mission & Werte',
    'Projects': 'Projekte',
    'Support Us': 'Unterstützen',
    'Welcome to GINA Royal Foundation': 'Willkommen bei der GINA Royal Foundation',
    'Empowering Widows in Machakos County, Kenya': 'Witwen im Landkreis Machakos, Kenia, stärken',
    'Supporting 30 women in the village of Malindi to overcome grief and build sustainable futures': 'Wir unterstützen 30 Frauen im Dorf Malindi dabei, Trauer zu überwinden und eine nachhaltige Zukunft aufzubauen',
    'We serve widows in Machakos County, Kenya, specifically working with 30 women in the small village of Malindi.': 'Wir begleiten Witwen im Landkreis Machakos in Kenia und arbeiten konkret mit 30 Frauen im kleinen Dorf Malindi.',
    'Imperfect vessels do great stuff.': 'Unvollkommene Gefäße leisten Großes.',
    'Inspired by the art of': 'Inspiriert von der Kunst des',
    '—repairing broken pottery with golden lacquer to create unique beauty—we help women find their strength and beauty from their brokenness. Just as Kintsugi celebrates the golden journey of repair, we celebrate the golden journey of life.': '—dem Reparieren zerbrochener Keramik mit goldenem Lack, um einzigartige Schönheit zu schaffen—helfen wir Frauen, aus ihrem Bruch Stärke und Schönheit zu finden. So wie Kintsugi den goldenen Weg der Reparatur feiert, feiern wir den goldenen Weg des Lebens.',
    'Our Core Values': 'Unsere Grundwerte',
    '- An anchor and motivator to move forward': '- Ein Anker und Antrieb, um weiterzugehen',
    '- Inner strength to rise from the ashes': '- Innere Stärke, um aus der Asche aufzustehen',
    '- To accept, heal, and defy the odds': '- Annehmen, heilen und den Widrigkeiten trotzen',
    '- Building sustainable futures': '- Nachhaltige Zukunft gestalten',
    'Learn More About Our Mission': 'Mehr über unsere Mission',
    'What We Do': 'Was wir tun',
    'We create sustainable change through:': 'Wir schaffen nachhaltigen Wandel durch:',
    'Sustainable farming and kitchen gardens': 'Nachhaltige Landwirtschaft und Küchengärten',
    'Educational support for children': 'Bildungsunterstützung für Kinder',
    'Water access infrastructure': 'Infrastruktur für Wasserzugang',
    'Traditional basket weaving training': 'Schulung im traditionellen Korbflechten',
    'Healthcare and counseling services': 'Gesundheits- und Beratungsangebote',
    'Explore Our Projects': 'Unsere Projekte entdecken',
    'Make a Difference': 'Einen Unterschied machen',
    'By uplifting a woman, we uplift an entire community.': 'Wenn wir eine Frau stärken, stärken wir eine ganze Gemeinschaft.',
    'Your support creates ripples of change that extend beyond individual widows to their families and communities. Partner with us to create lasting impact.': 'Ihre Unterstützung erzeugt Wellen der Veränderung, die über einzelne Witwen hinaus ihre Familien und Gemeinschaften erreichen. Arbeiten Sie mit uns zusammen, um nachhaltige Wirkung zu schaffen.',
    'Support Our Work': 'Unsere Arbeit unterstützen',
    'Stories of Hope & Transformation': 'Geschichten von Hoffnung und Wandel',
    'Hear from the women whose lives have been transformed through our programs.': 'Hören Sie von Frauen, deren Leben durch unsere Programme verändert wurde.',
    '"The kitchen garden has changed everything for my family. We now have fresh vegetables every day, and I can sell the surplus at the market. For the first time in years, I feel hope for the future."': '"Der Küchengarten hat für meine Familie alles verändert. Wir haben jetzt jeden Tag frisches Gemüse, und ich kann den Überschuss auf dem Markt verkaufen. Zum ersten Mal seit Jahren habe ich Hoffnung für die Zukunft."',
    '- Grace, 52, Malindi Village': '- Grace, 52, Dorf Malindi',
    '"Through the counseling program, I found my strength again. I learned that my story doesn\'t end with loss—it\'s just beginning a new chapter. Now I help other widows find their own strength."': '"Durch das Beratungsprogramm habe ich meine Stärke wiedergefunden. Ich habe gelernt, dass meine Geschichte nicht mit Verlust endet—sie beginnt nur ein neues Kapitel. Jetzt helfe ich anderen Witwen, ihre eigene Stärke zu finden."',
    '- Mary, 45, Malindi Village': '- Mary, 45, Dorf Malindi',
    '"My children can now continue their education thanks to the foundation. Education is the greatest gift I can give them, and it gives me peace knowing they have a future."': '"Dank der Stiftung können meine Kinder ihre Ausbildung fortsetzen. Bildung ist das größte Geschenk, das ich ihnen geben kann, und es gibt mir Frieden zu wissen, dass sie eine Zukunft haben."',
    '- Ruth, 38, Malindi Village': '- Ruth, 38, Dorf Malindi',
    'Our Impact': 'Unsere Wirkung',
    'Widows Served': 'Unterstützte Witwen',
    'Generations Impacted': 'Erreichte Generationen',
    'Key Project Areas': 'Zentrale Projektbereiche',
    'Community Impact': 'Wirkung in der Gemeinschaft',
    'A Multigenerational Approach': 'Ein generationenübergreifender Ansatz',
    'GRF serves women from age 30 to 90+ years old, spanning 4 generations along with their children and grandchildren. This transgenerational approach ensures lasting change that extends through families and communities for years to come.': 'GRF arbeitet mit Frauen im Alter von 30 bis über 90 Jahren und erreicht 4 Generationen einschließlich ihrer Kinder und Enkelkinder. Dieser transgenerationale Ansatz sichert nachhaltige Veränderung in Familien und Gemeinschaften über viele Jahre hinweg.',
    'Our Recent Activities': 'Unsere aktuellen Aktivitäten',
    'See the impact of our work through photos from our latest community gatherings and programs.': 'Sehen Sie die Wirkung unserer Arbeit anhand von Fotos unserer jüngsten Gemeindetreffen und Programme.',
    'Community Gathering - Widows United': 'Gemeindetreffen - Witwen vereint',
    'Sustainable Farming Program': 'Programm für nachhaltige Landwirtschaft',
    'Peer Support & Counseling': 'Peer-Unterstützung & Beratung',
    'Income Generation Activities': 'Einkommensfördernde Aktivitäten',
    'Skills Training Workshop': 'Workshop zur Kompetenzentwicklung',
    'Join Us in Creating Change': 'Gemeinsam Veränderung schaffen',
    'Together, we can help widows overcome grief, reclaim their dignity, and build sustainable futures for themselves and their families.': 'Gemeinsam können wir Witwen helfen, Trauer zu überwinden, ihre Würde zurückzugewinnen und nachhaltige Zukunftsperspektiven für sich und ihre Familien aufzubauen.',
    'Learn Our Story': 'Unsere Geschichte kennenlernen',
    'Partner With Us': 'Mit uns zusammenarbeiten',
    'GINA Royal Foundation': 'GINA Royal Foundation',
    'Empowering widows in Machakos County, Kenya': 'Witwen im Landkreis Machakos, Kenia, stärken',
    'Quick Links': 'Schnellzugriff',
    'Contact': 'Kontakt',
    'Phone: +254 722 916297': 'Telefon: +254 722 916297',
    'Social Media': 'Soziale Medien',
    'About Us': 'Über uns',
    'Our Projects': 'Unsere Projekte',
    '© 2024 GINA Royal Foundation. All rights reserved.': '© 2024 GINA Royal Foundation. Alle Rechte vorbehalten.',
    'About GINA Royal Foundation': 'Über die GINA Royal Foundation',
    'Empowering widows to overcome grief and reclaim their dignity through sustainable community programs in Machakos County, Kenya.': 'Witwen stärken, damit sie Trauer überwinden und ihre Würde durch nachhaltige Gemeinschaftsprogramme im Landkreis Machakos, Kenia, zurückgewinnen.',
    'Founded on the principles of hope, resilience, and empowerment, GINA Royal Foundation serves widows in Machakos County, Kenya, specifically working with 30 women in the small village of Malindi.': 'Auf den Prinzipien Hoffnung, Resilienz und Selbstermächtigung gegründet, begleitet die GINA Royal Foundation Witwen im Landkreis Machakos in Kenia und arbeitet konkret mit 30 Frauen im kleinen Dorf Malindi.',
    'Widows Actively Served': 'Aktiv unterstützte Witwen',
    'Age Range of Women': 'Altersgruppe der Frauen',
    'Family Members Supported': 'Unterstützte Familienmitglieder',
    'Our Story': 'Unsere Geschichte',
    'GINA Royal Foundation was established to address the profound challenges faced by widows in Machakos County, Kenya. In the small village of Malindi, we work directly with 30 remarkable women who have experienced loss and are courageously navigating the difficult journey of rebuilding their lives.': 'Die GINA Royal Foundation wurde gegründet, um die tiefgreifenden Herausforderungen von Witwen im Landkreis Machakos in Kenia anzugehen. Im kleinen Dorf Malindi arbeiten wir direkt mit 30 bemerkenswerten Frauen, die Verlust erlebt haben und mutig den schwierigen Weg des Wiederaufbaus ihres Lebens gehen.',
    'These women face not only emotional and psychological challenges but also practical difficulties in providing for their families. Many struggle with food insecurity due to irregular weather patterns, lack access to clean water, and have limited opportunities for sustainable income generation.': 'Diese Frauen stehen nicht nur vor emotionalen und psychologischen Herausforderungen, sondern auch vor praktischen Schwierigkeiten bei der Versorgung ihrer Familien. Viele kämpfen wegen unregelmäßiger Wetterlagen mit Ernährungsunsicherheit, haben keinen Zugang zu sauberem Wasser und nur begrenzte Möglichkeiten für nachhaltiges Einkommen.',
    'What began as a vision to help a few women has grown into a comprehensive, multigenerational initiative that transforms entire families and strengthens the fabric of the community.': 'Was als Vision begann, einigen wenigen Frauen zu helfen, ist zu einer umfassenden, generationenübergreifenden Initiative gewachsen, die ganze Familien verändert und den Zusammenhalt der Gemeinschaft stärkt.',
    'Our Mantra': 'Unser Leitsatz',
    '"Overcome grief and claim your dignity"': '"Überwinde Trauer und gewinne deine Würde zurück"',
    'Grief and heartache can profoundly affect an individual, often leading to a sense of despair. A wounded spirit can diminish one\'s vitality, and where hope is absent, the heart suffers. This foundation aims to restore hope to widows, empowering them to overcome grief and reclaim their dignity.': 'Trauer und Herzschmerz können einen Menschen tiefgreifend treffen und oft zu Verzweiflung führen. Ein verletzter Geist kann die Lebenskraft mindern, und wo Hoffnung fehlt, leidet das Herz. Diese Stiftung möchte Witwen Hoffnung zurückgeben und sie befähigen, Trauer zu überwinden und ihre Würde zurückzugewinnen.',
    'We believe that every woman, regardless of her circumstances, deserves the opportunity to heal, grow, and thrive. Our mantra guides everything we do—from the programs we create to the partnerships we forge.': 'Wir glauben, dass jede Frau unabhängig von ihren Lebensumständen die Chance auf Heilung, Wachstum und Entfaltung verdient. Unser Leitsatz leitet alles, was wir tun—von den Programmen, die wir entwickeln, bis zu den Partnerschaften, die wir eingehen.',
    'GRF is a multigenerational foundation that serves women from the age of 30 to 90+ years old. This means that we work with 4 generations, each with unique needs, along with their children and grandchildren.': 'GRF ist eine generationenübergreifende Stiftung, die Frauen von 30 bis über 90 Jahren begleitet. Das bedeutet, dass wir mit 4 Generationen arbeiten, jeweils mit eigenen Bedürfnissen, einschließlich ihrer Kinder und Enkelkinder.',
    'By taking a holistic, family-centered approach, we create lasting change that extends beyond individual widows to their entire families and communities.': 'Durch einen ganzheitlichen, familienzentrierten Ansatz schaffen wir nachhaltige Veränderung, die über einzelne Witwen hinaus ihre gesamten Familien und Gemeinschaften erreicht.',
    'When we uplift a woman, we uplift an entire community.': 'Wenn wir eine Frau stärken, stärken wir eine ganze Gemeinschaft.',
    'Why It Matters': 'Warum das wichtig ist',
    'In many parts of Kenya, widows face unique challenges including:': 'In vielen Teilen Kenias stehen Witwen vor besonderen Herausforderungen, darunter:',
    'Social stigma and isolation': 'Soziale Stigmatisierung und Isolation',
    'Loss of property and inheritance rights': 'Verlust von Eigentums- und Erbrechten',
    'Primary responsibility for children\'s welfare': 'Hauptverantwortung für das Wohlergehen der Kinder',
    'Limited access to resources and opportunities': 'Eingeschränkter Zugang zu Ressourcen und Chancen',
    'Emotional trauma without support systems': 'Emotionales Trauma ohne Unterstützungssysteme',
    'Our programs address these challenges head-on, providing both immediate relief and long-term solutions.': 'Unsere Programme begegnen diesen Herausforderungen direkt und bieten sowohl sofortige Hilfe als auch langfristige Lösungen.',
    'Location & Context': 'Standort & Kontext',
    'Region': 'Region',
    'Machakos County, Kenya': 'Landkreis Machakos, Kenia',
    'Located in the former Eastern Province, approximately 64 km southeast of Nairobi': 'Liegt in der ehemaligen Eastern Province, etwa 64 km südöstlich von Nairobi',
    'Village': 'Dorf',
    'Malindi': 'Malindi',
    'A small rural community where agriculture is the primary livelihood': 'Eine kleine ländliche Gemeinschaft, in der Landwirtschaft die wichtigste Lebensgrundlage ist',
    'Climate': 'Klima',
    'Semi-arid': 'Halbtrocken',
    'Irregular weather patterns with rainfall occurring only 2-3 times per year, creating significant agricultural challenges': 'Unregelmäßige Wetterlagen mit nur 2–3 Regenperioden pro Jahr, was große landwirtschaftliche Herausforderungen verursacht',
    'Primary Challenges': 'Hauptprobleme',
    'Food insecurity and malnutrition': 'Ernährungsunsicherheit und Mangelernährung',
    'Severe water scarcity': 'Starker Wassermangel',
    'Limited healthcare access': 'Eingeschränkter Zugang zu Gesundheitsversorgung',
    'Educational barriers for children': 'Bildungsbarrieren für Kinder',
    'Climate change impacts': 'Auswirkungen des Klimawandels',
    'The Kintsugi Philosophy': 'Die Kintsugi-Philosophie',
    'Our approach is inspired by the Japanese art of': 'Unser Ansatz ist von der japanischen Kunst des',
    '—the practice of repairing broken pottery with golden lacquer, making the piece even more beautiful than before. The breaks and repairs become part of the object\'s history, rather than something to hide.': '—der Praxis, zerbrochene Keramik mit goldenem Lack zu reparieren, wodurch das Stück noch schöner wird als zuvor. Brüche und Reparaturen werden Teil der Geschichte des Objekts, statt etwas zu sein, das man verstecken muss.',
    'Similarly, we believe that the women we serve don\'t need to hide their pain or their past. Instead, we help them transform their experiences into sources of strength and beauty. Their resilience becomes their golden thread—making them not just restored, but even more remarkable than before.': 'Ebenso glauben wir, dass die Frauen, die wir begleiten, ihren Schmerz oder ihre Vergangenheit nicht verbergen müssen. Stattdessen helfen wir ihnen, ihre Erfahrungen in Quellen von Stärke und Schönheit zu verwandeln. Ihre Resilienz wird zu ihrem goldenen Faden—sie macht sie nicht nur wiederhergestellt, sondern noch bemerkenswerter als zuvor.',
    'Join Our Journey': 'Begleiten Sie uns auf diesem Weg',
    'We invite you to be part of this transformative work. Whether through partnership, support, or spreading awareness, you can help us create lasting change in the lives of widows and their families.': 'Wir laden Sie ein, Teil dieser transformierenden Arbeit zu sein. Ob durch Partnerschaft, Unterstützung oder Aufklärung—Sie können uns helfen, nachhaltige Veränderung im Leben von Witwen und ihren Familien zu schaffen.',
    'Explore Our Mission': 'Unsere Mission entdecken',
    'See Our Projects': 'Unsere Projekte ansehen',
    'Our Mission & Core Values': 'Unsere Mission & Grundwerte',
    'Transforming brokenness into beauty, one woman at a time—inspired by the art of Kintsugi and guided by hope, resilience, courage, and empowerment.': 'Bruch in Schönheit verwandeln, eine Frau nach der anderen—inspiriert von der Kunst des Kintsugi und geleitet von Hoffnung, Resilienz, Mut und Selbstermächtigung.',
    'This simple yet profound statement captures the heart of everything we do at GINA Royal Foundation.': 'Dieser einfache und doch tiefgründige Satz fasst das Herzstück all unseres Handelns bei der GINA Royal Foundation zusammen.',
    'The Kintsugi Philosophy: Beauty from Brokenness': 'Die Kintsugi-Philosophie: Schönheit aus dem Bruch',
    ', which involves repairing broken pottery with a special golden lacquer that brings about a unique beauty. We mirror our vision for GINA Royal Foundation from this—The golden journey of life.': ', bei der zerbrochene Keramik mit einem besonderen goldenen Lack repariert wird, der einzigartige Schönheit entstehen lässt. Daraus leiten wir unsere Vision für die GINA Royal Foundation ab—der goldene Weg des Lebens.',
    'The Art of Kintsugi': 'Die Kunst des Kintsugi',
    'When a piece of pottery breaks, Kintsugi artisans don\'t hide the cracks or throw away the broken pieces. Instead, they carefully repair them with lacquer mixed with powdered gold, silver, or platinum. The result is a piece that\'s even more beautiful than before—with golden seams that celebrate its history.': 'Wenn ein Keramikstück zerbricht, verbergen Kintsugi-Künstler die Risse nicht und werfen die Stücke nicht weg. Stattdessen reparieren sie sie sorgfältig mit Lack, gemischt mit Gold-, Silber- oder Platinpulver. Das Ergebnis ist ein Stück, das noch schöner ist als zuvor—mit goldenen Nähten, die seine Geschichte feiern.',
    'Our Application': 'Unsere Umsetzung',
    'Just as these items are restored, the women we serve find their strength and beauty from their brokenness. Their beauty is born from their imperfection. The golden seams of repair become part of their story—not something to hide but something that makes them stronger and more beautiful.': 'So wie diese Gegenstände wiederhergestellt werden, finden die Frauen, die wir begleiten, aus ihrem Bruch Stärke und Schönheit. Ihre Schönheit entsteht aus ihrer Unvollkommenheit. Die goldenen Nähte der Reparatur werden Teil ihrer Geschichte—nichts, das man versteckt, sondern etwas, das sie stärker und schöner macht.',
    'The Transformation': 'Die Transformation',
    'We don\'t try to make widows forget their past or pretend their pain never happened. Instead, we help them integrate their experiences into their identity, transforming grief into wisdom, loss into compassion, and vulnerability into strength.': 'Wir versuchen nicht, Witwen ihre Vergangenheit vergessen zu lassen oder so zu tun, als hätte es den Schmerz nie gegeben. Stattdessen helfen wir ihnen, ihre Erfahrungen in ihre Identität zu integrieren und Trauer in Weisheit, Verlust in Mitgefühl und Verletzlichkeit in Stärke zu verwandeln.',
    'The Golden Thread': 'Der goldene Faden',
    'Every program, every intervention, every moment of support is part of the golden thread we weave through these women\'s lives. Together, we\'re creating something beautiful—not despite the brokenness, but because of it.': 'Jedes Programm, jede Intervention und jeder Moment der Unterstützung ist Teil des goldenen Fadens, den wir durch das Leben dieser Frauen weben. Gemeinsam schaffen wir etwas Schönes—nicht trotz des Bruchs, sondern wegen ihm.',
    'These four pillars guide every decision we make, every program we create, and every life we touch. They are not just words on a page—they are the beating heart of our foundation.': 'Diese vier Säulen leiten jede Entscheidung, die wir treffen, jedes Programm, das wir entwickeln, und jedes Leben, das wir berühren. Sie sind nicht nur Worte auf einer Seite—sie sind das schlagende Herz unserer Stiftung.',
    'An anchor and a motivator to move forward': 'Ein Anker und Antrieb, um weiterzugehen',
    'Grief births hopelessness and hope acts as an anchor and a motivator to move forward.': 'Trauer erzeugt Hoffnungslosigkeit, und Hoffnung wirkt als Anker und Antrieb, um weiterzugehen.',
    'Why Hope Matters': 'Warum Hoffnung wichtig ist',
    'Hope is the foundation upon which we build everything else. Without hope, there can be no healing, no growth, no future. We work to restore hope to widows who have lost it, helping them see that their story is not over—it\'s simply entering a new chapter.': 'Hoffnung ist das Fundament, auf dem wir alles andere aufbauen. Ohne Hoffnung gibt es keine Heilung, kein Wachstum, keine Zukunft. Wir arbeiten daran, Witwen Hoffnung zurückzugeben, die sie verloren haben, und helfen ihnen zu erkennen, dass ihre Geschichte nicht vorbei ist—sie beginnt lediglich ein neues Kapitel.',
    'Hope in Action': 'Hoffnung in der Praxis',
    'Counseling programs that help process grief': 'Beratungsprogramme zur Trauerbewältigung',
    'Peer support groups led by healed widows': 'Peer-Selbsthilfegruppen unter Leitung geheilter Witwen',
    'Celebrating small victories and milestones': 'Kleine Erfolge und Meilensteine feiern',
    'Creating visible pathways to better futures': 'Sichtbare Wege in bessere Zukunft schaffen',
    'Inner strength to rise from the ashes': 'Innere Stärke, um aus der Asche aufzustehen',
    'The ability to withstand adversity and bounce back from difficult life events. Inner strength, drive and courage to rise from the ashes, heal and move forward.': 'Die Fähigkeit, Widrigkeiten standzuhalten und nach schwierigen Lebensereignissen zurückzukommen. Innere Stärke, Antrieb und Mut, um aus der Asche aufzustehen, zu heilen und weiterzugehen.',
    'Why Resilience Matters': 'Warum Resilienz wichtig ist',
    'Resilience is not about never falling—it\'s about getting back up. We help women discover the incredible strength they already possess within themselves, giving them the tools and support to bounce back from life\'s hardest challenges.': 'Resilienz bedeutet nicht, niemals zu fallen—sie bedeutet, wieder aufzustehen. Wir helfen Frauen, die unglaubliche Stärke zu entdecken, die bereits in ihnen steckt, und geben ihnen Werkzeuge und Unterstützung, um sich von den härtesten Herausforderungen des Lebens zu erholen.',
    'Resilience in Action': 'Resilienz in der Praxis',
    'Skills training for economic independence': 'Kompetenztraining für wirtschaftliche Unabhängigkeit',
    'Agricultural programs for food security': 'Landwirtschaftsprogramme für Ernährungssicherheit',
    'Business development support': 'Unterstützung bei der Unternehmensentwicklung',
    'Leadership development opportunities': 'Möglichkeiten zur Entwicklung von Führungskompetenzen',
    'Defying the odds that grief brings': 'Den Widrigkeiten der Trauer trotzen',
    'To accept, acknowledge, heal and defy the odds that grief brings.': 'Annehmen, anerkennen, heilen und den Widrigkeiten trotzen, die Trauer mit sich bringt.',
    'Why Courage Matters': 'Warum Mut wichtig ist',
    'It takes tremendous courage to face grief, to acknowledge pain, and to choose healing. We honor the bravery of every woman who takes steps forward, no matter how small those steps may seem. Each act of courage defies the odds.': 'Es braucht enormen Mut, sich der Trauer zu stellen, Schmerz anzuerkennen und Heilung zu wählen. Wir würdigen die Tapferkeit jeder Frau, die voranschreitet, egal wie klein diese Schritte erscheinen. Jeder Akt des Mutes trotzt den Widrigkeiten.',
    'Courage in Action': 'Mut in der Praxis',
    'Creating safe spaces to share stories': 'Sichere Räume zum Teilen von Geschichten schaffen',
    'Encouraging women to try new things': 'Frauen ermutigen, Neues auszuprobieren',
    'Supporting risk-taking in safe environments': 'Risikobereitschaft in sicheren Umgebungen fördern',
    'Celebrating acts of bravery, big and small': 'Mutige Taten feiern, ob groß oder klein',
    'Building sustainable futures': 'Nachhaltige Zukunft gestalten',
    'Equipping them with essential skills and resources necessary to create sustainable income for themselves and their families. By uplifting a woman, we uplift an entire community.': 'Wir statten sie mit wesentlichen Fähigkeiten und Ressourcen aus, die nötig sind, um nachhaltiges Einkommen für sich und ihre Familien zu schaffen. Wenn wir eine Frau stärken, stärken wir eine ganze Gemeinschaft.',
    'Why Empowerment Matters': 'Warum Selbstermächtigung wichtig ist',
    'True empowerment means providing not just temporary relief, but lasting tools for self-sufficiency. We equip women with skills, resources, and opportunities so they can build sustainable futures for themselves and their families.': 'Echte Selbstermächtigung bedeutet, nicht nur vorübergehende Hilfe zu leisten, sondern dauerhafte Werkzeuge für Selbstständigkeit bereitzustellen. Wir geben Frauen Fähigkeiten, Ressourcen und Chancen, damit sie nachhaltige Zukunft für sich und ihre Familien aufbauen können.',
    'Empowerment in Action': 'Selbstermächtigung in der Praxis',
    'Sustainable farming techniques training': 'Training in nachhaltigen Landwirtschaftstechniken',
    'Traditional craft skill development': 'Entwicklung traditioneller Handwerkskompetenzen',
    'Market linkages for income generation': 'Marktanbindung zur Einkommensschaffung',
    'Financial literacy and planning': 'Finanzbildung und Planung',
    'Our Primary Focus: Income Generating Activities': 'Unser Hauptfokus: Einkommensschaffende Aktivitäten',
    'Our primary focus is on creating sustainable income opportunities for widows. Economic empowerment is crucial for restoring dignity and independence.': 'Unser Hauptfokus liegt auf der Schaffung nachhaltiger Einkommensmöglichkeiten für Witwen. Wirtschaftliche Selbstermächtigung ist entscheidend, um Würde und Unabhängigkeit wiederherzustellen.',
    'Kitchen gardens, sunflower cultivation, and chicken rearing provide both food security and income opportunities.': 'Küchengärten, Sonnenblumenanbau und Geflügelhaltung bieten sowohl Ernährungssicherheit als auch Einkommensmöglichkeiten.',
    'Basket weaving (viondo) connects women to their cultural heritage while creating marketable products.': 'Korbflechten (Viondo) verbindet Frauen mit ihrem kulturellen Erbe und schafft gleichzeitig marktfähige Produkte.',
    'Training in entrepreneurship, financial management, and market access helps women build sustainable enterprises.': 'Schulungen in Unternehmertum, Finanzmanagement und Marktzugang helfen Frauen, nachhaltige Unternehmen aufzubauen.',
    'Cooperative structures and peer support systems amplify individual efforts into collective success.': 'Kooperative Strukturen und Peer-Unterstützungssysteme verstärken individuelle Anstrengungen zu gemeinsamem Erfolg.',
    'Through various initiatives—from kitchen gardens to sunflower cultivation, from chicken rearing to traditional basket weaving—we provide multiple pathways for women to generate income and support their families.': 'Durch verschiedene Initiativen—von Küchengärten über Sonnenblumenanbau bis zu Geflügelhaltung und traditionellem Korbflechten—bieten wir Frauen mehrere Wege, Einkommen zu generieren und ihre Familien zu unterstützen.',
    'Values in Action: Real Impact': 'Werte in der Praxis: Echte Wirkung',
    'Our values aren\'t abstract concepts—they\'re lived realities that transform lives every day.': 'Unsere Werte sind keine abstrakten Konzepte—sie sind gelebte Wirklichkeiten, die jeden Tag Leben verändern.',
    '"I came to GRF with nothing but grief. They gave me hope, taught me farming, and now I feed my family from my own garden. I am not just surviving—I am thriving."': '"Ich kam mit nichts als Trauer zu GRF. Sie gaben mir Hoffnung, lehrten mich Landwirtschaft, und jetzt ernähre ich meine Familie aus meinem eigenen Garten. Ich überlebe nicht nur—ich lebe auf."',
    '- Elizabeth, 48, Kitchen Garden Program': '- Elizabeth, 48, Küchengarten-Programm',
    '"The counseling helped me find my courage again. Now I lead a support group for other widows. My pain has purpose—it helps others heal."': '"Die Beratung hat mir geholfen, meinen Mut wiederzufinden. Jetzt leite ich eine Unterstützungsgruppe für andere Witwen. Mein Schmerz hat einen Sinn—er hilft anderen zu heilen."',
    '- Jane, 55, Peer Counselor': '- Jane, 55, Peer-Beraterin',
    'See Our Values in Action': 'Unsere Werte in der Praxis sehen',
    'Explore our projects to see how hope, resilience, courage, and empowerment transform into real programs that change lives.': 'Entdecken Sie unsere Projekte und sehen Sie, wie Hoffnung, Resilienz, Mut und Selbstermächtigung zu realen Programmen werden, die Leben verändern.',
    'View Our Projects': 'Unsere Projekte ansehen',
    'Support This Work': 'Diese Arbeit unterstützen',
    'Our Projects & Initiatives': 'Unsere Projekte & Initiativen',
    'Five comprehensive programs creating sustainable change for widows, their families, and communities in Machakos County, Kenya.': 'Fünf umfassende Programme, die nachhaltige Veränderung für Witwen, ihre Familien und Gemeinschaften im Landkreis Machakos, Kenia, schaffen.',
    'GRF is a multigenerational Foundation serving women aged 30-90+ years, spanning 4 generations with their children and grandchildren. Each program is designed to address specific challenges while building toward long-term sustainability and community resilience.': 'GRF ist eine generationenübergreifende Stiftung für Frauen im Alter von 30 bis über 90 Jahren und erreicht 4 Generationen mit ihren Kindern und Enkelkindern. Jedes Programm ist darauf ausgelegt, spezifische Herausforderungen zu adressieren und gleichzeitig langfristige Nachhaltigkeit und Resilienz der Gemeinschaft aufzubauen.',
    'Q2 April - June: Kitchen Gardens Initiative': 'Q2 April - Juni: Initiative Küchengärten',
    'Due to irregular weather patterns, many widows struggle to harvest crops adequately and often rely on government relief food.': 'Aufgrund unregelmäßiger Wetterlagen haben viele Witwen Schwierigkeiten, ausreichend Ernte einzubringen, und sind häufig auf staatliche Nahrungsmittelhilfe angewiesen.',
    'GRF is dedicated to empowering women by establishing small-scale kitchen gardens. This initiative was pitched this April and the women took it with open arms since it directly addresses household food security and enhances dietary diversity within communities.': 'GRF setzt sich dafür ein, Frauen durch kleine Küchengärten zu stärken. Diese Initiative wurde im April vorgestellt und von den Frauen begeistert angenommen, da sie direkt die Ernährungssicherheit in Haushalten verbessert und die Ernährungsvielfalt in den Gemeinden erhöht.',
    'September 2025: Expansion Phase': 'September 2025: Ausbauphase',
    'Building on this success, starting in September 2025, GRF will introduce sustainable farming techniques through sunflower cultivation and chicken rearing. This expansion aims to create long-term economic opportunities and resilience for the women.': 'Aufbauend auf diesem Erfolg wird GRF ab September 2025 nachhaltige Landwirtschaftstechniken durch Sonnenblumenanbau und Geflügelhaltung einführen. Dieser Ausbau soll langfristige wirtschaftliche Chancen und Resilienz für die Frauen schaffen.',
    'Partnership Opportunity:': 'Partnerschaftsmöglichkeit:',
    'GRF seeks strategic partnerships and collaboration with an oil-producing company that can purchase sunflower seeds from these women and help establish a sustainable business. This initiative not only supports the widows but also creates job opportunities for their children, making this foundation a transgenerational venture.': 'GRF sucht strategische Partnerschaften und Zusammenarbeit mit einem Ölproduzenten, der Sonnenblumenkerne von diesen Frauen kaufen und beim Aufbau eines nachhaltigen Geschäfts helfen kann. Diese Initiative unterstützt nicht nur die Witwen, sondern schafft auch Arbeitsmöglichkeiten für ihre Kinder und macht diese Stiftung zu einem generationenübergreifenden Vorhaben.',
    '1. Education': '1. Bildung',
    'GRF recognizes the need to address the educational challenges faced by the children of the widows who end up dropping out because of lack of school fees. Without support, many children are unable to continue their education, leading to social issues within the community.': 'GRF erkennt die Notwendigkeit, die Bildungsprobleme der Kinder von Witwen anzugehen, die aufgrund fehlender Schulgebühren die Schule abbrechen. Ohne Unterstützung können viele Kinder ihre Ausbildung nicht fortsetzen, was zu sozialen Problemen in der Gemeinschaft führt.',
    'GRF looks forward to creating pathways for these children\'s education. We aim to act as a bridge, connecting them with resources and opportunities.': 'GRF möchte Wege für die Bildung dieser Kinder schaffen. Wir wollen als Brücke wirken und sie mit Ressourcen und Chancen verbinden.',
    'Key Objectives:': 'Kernziele:',
    'Prevent school dropouts due to financial constraints': 'Schulabbrüche aufgrund finanzieller Engpässe verhindern',
    'Connect children with educational sponsors': 'Kinder mit Bildungspatenschaften verbinden',
    'Create pathways to continued education': 'Wege für fortgesetzte Bildung schaffen',
    'Break the cycle of poverty through education': 'Den Kreislauf der Armut durch Bildung durchbrechen',
    '2. Water Catchment Areas': '2. Wassereinzugsgebiete',
    'One of the critical challenges in this region is its semi-arid climate, characterized by irregular weather patterns. Rainfall occurs only two to three times a year, severely impacting crop production and limiting access to water.': 'Eine der zentralen Herausforderungen in dieser Region ist das halbtrockene Klima mit unregelmäßigen Wetterlagen. Regen fällt nur zwei- bis dreimal im Jahr, was die Ernte stark beeinträchtigt und den Zugang zu Wasser einschränkt.',
    'Many women, including the elderly, must travel long distances to fetch water, often carrying it on their backs. Additionally, they need to take their livestock far from home to access water.': 'Viele Frauen, auch ältere, müssen weite Strecken zurücklegen, um Wasser zu holen, oft auf dem Rücken getragen. Zusätzlich müssen sie ihr Vieh weit weg von zu Hause führen, um Zugang zu Wasser zu erhalten.',
    'Looking for partners to help fund:': 'Wir suchen Partner zur Finanzierung von:',
    'Drilling of boreholes in the community': 'Bohren von Brunnen in der Gemeinschaft',
    'Water tanks for each woman to store rainwater': 'Wassertanks für jede Frau zur Regenwasserspeicherung',
    'Water catchment systems': 'Wassersammelsystemen',
    'Due to a lack of resources, many widows cannot afford clean drinking water. Purchasing a 20-liter bottle costs Ksh. 20 or more, which is often beyond their means. As a result, they rely on water from nearby rivers, which is not safe and poses health risks.': 'Aufgrund fehlender Mittel können sich viele Witwen kein sauberes Trinkwasser leisten. Eine 20-Liter-Flasche kostet Ksh. 20 oder mehr, was oft außerhalb ihrer Möglichkeiten liegt. Daher sind sie auf Wasser aus nahegelegenen Flüssen angewiesen, das nicht sicher ist und Gesundheitsrisiken birgt.',
    '3. Climate Justice': '3. Klimagerechtigkeit',
    '"It\'s the little things citizens do. That\'s what will make the difference. My little thing is planting trees."': '"Es sind die kleinen Dinge, die Bürgerinnen und Bürger tun. Das macht den Unterschied. Mein kleiner Beitrag ist Bäume pflanzen."',
    '- Wangari Maathai, Nobel Peace Prize Laureate': '- Wangari Maathai, Friedensnobelpreisträgerin',
    'Deforestation has significantly decreased tropical rainfall due to the widespread use of trees for firewood and charcoal. GINA Royal Foundation aims to be environmental ambassadors by promoting a greener future.': 'Abholzung hat den tropischen Niederschlag deutlich verringert, da Bäume weit verbreitet als Brennholz und Holzkohle genutzt werden. Die GINA Royal Foundation möchte als Botschafterin für die Umwelt eine grünere Zukunft fördern.',
    'We intend to educate these women on the importance of planting trees and other vegetation, such as bamboo, to help restore the ecosystem and also introduce regenerative farming inclusive of using renewable energy sources to conserve the environment.': 'Wir wollen diese Frauen über die Bedeutung des Pflanzens von Bäumen und anderer Vegetation, wie Bambus, aufklären, um das Ökosystem wiederherzustellen, und außerdem regenerative Landwirtschaft einschließlich erneuerbarer Energiequellen einführen, um die Umwelt zu schützen.',
    'Key Initiatives:': 'Zentrale Initiativen:',
    'Tree planting programs': 'Baumpflanzprogramme',
    'Bamboo cultivation': 'Bambusanbau',
    'Regenerative farming techniques': 'Regenerative Landwirtschaftstechniken',
    'Renewable energy adoption': 'Einführung erneuerbarer Energien',
    '4. The Art of Weaving': '4. Die Kunst des Flechtens',
    'GRF seeks to create additional income streams through the art of "viondo" basketry. This skill of utilizing local sisal wool will be taught to the widows, providing them with a valuable craft and a means to financially support their families.': 'GRF möchte durch die Kunst des "Viondo"-Korbflechtens zusätzliche Einkommensquellen schaffen. Diese Fähigkeit, lokale Sisalfasern zu nutzen, wird den Witwen vermittelt und gibt ihnen ein wertvolles Handwerk sowie eine Möglichkeit, ihre Familien finanziell zu unterstützen.',
    'By planting the sisal vegetation they will promote climate justice and create their own ready resource materials. This creates a sustainable cycle: grow the materials, craft the baskets, sell for income, and contribute to environmental restoration.': 'Durch das Pflanzen von Sisal fördern sie Klimagerechtigkeit und schaffen ihre eigenen Rohmaterialien. So entsteht ein nachhaltiger Kreislauf: Materialien anbauen, Körbe flechten, für Einkommen verkaufen und zur ökologischen Wiederherstellung beitragen.',
    'Program Components:': 'Programmbausteine:',
    'Experienced trainers in traditional basket weaving': 'Erfahrene Trainerinnen und Trainer im traditionellen Korbflechten',
    'Partnerships for skill development': 'Partnerschaften zur Kompetenzentwicklung',
    'Market establishment for basket sales': 'Markterschließung für den Korbverkauf',
    'Sisal vegetation planting for sustainability': 'Anpflanzung von Sisal für Nachhaltigkeit',
    '5. Healing, Counseling and Medical Camps': '5. Heilung, Beratung und Gesundheitscamps',
    'GRF recognizes the emotional and psychological impact of loss. We aim to bring in professional counselors alongside widows who have experienced healing and are using their journeys to inspire and support others.': 'GRF erkennt die emotionalen und psychologischen Auswirkungen von Verlust an. Wir möchten professionelle Beraterinnen und Berater einbinden sowie Witwen, die Heilung erfahren haben und ihren Weg nutzen, um andere zu inspirieren und zu unterstützen.',
    'By sharing their stories, these women will demonstrate that it is possible to rise from adversity and find hope, providing encouragement and guidance to those still navigating their pain.': 'Durch das Teilen ihrer Geschichten zeigen diese Frauen, dass es möglich ist, aus Widrigkeiten aufzustehen und Hoffnung zu finden, und geben dadurch Ermutigung und Orientierung für diejenigen, die noch mit ihrem Schmerz ringen.',
    'Some widows range in age from 30 to 90 years, and many face health challenges without the financial means to seek medical care. To address this critical need GRF looks forward to organizing medical camps which will provide services such as eye care and diabetes screenings, among others, ensuring these women receive the healthcare they need.': 'Einige Witwen sind zwischen 30 und 90 Jahre alt, und viele stehen vor gesundheitlichen Problemen ohne finanzielle Mittel für medizinische Versorgung. Um diesen kritischen Bedarf zu decken, plant GRF Gesundheitscamps mit Leistungen wie Augenversorgung und Diabetes-Screenings, damit diese Frauen die benötigte Versorgung erhalten.',
    'Services Provided:': 'Angebotene Leistungen:',
    'Professional grief counseling': 'Professionelle Trauerberatung',
    'Peer support from healed widows': 'Peer-Unterstützung durch geheilte Witwen',
    'Medical camps with free healthcare': 'Gesundheitscamps mit kostenfreier Versorgung',
    'Eye care services': 'Augenmedizinische Versorgung',
    'Diabetes screenings': 'Diabetes-Screenings',
    'General health checkups': 'Allgemeine Gesundheitschecks',
    'By combining professional counseling with the lived experiences of healed widows and proactively addressing healthcare needs through medical camps, GRF aims to provide holistic support, fostering both emotional well-being and physical health.': 'Durch die Kombination professioneller Beratung mit den gelebten Erfahrungen geheilter Witwen und die proaktive Deckung gesundheitlicher Bedürfnisse durch Gesundheitscamps möchte GRF ganzheitliche Unterstützung leisten und sowohl emotionales Wohlbefinden als auch körperliche Gesundheit fördern.',
    'Support Our Mission': 'Unsere Mission unterstützen',
    'Your support creates lasting change for widows and their families. Partner with us to build sustainable futures and transform entire communities.': 'Ihre Unterstützung schafft nachhaltige Veränderung für Witwen und ihre Familien. Arbeiten Sie mit uns zusammen, um nachhaltige Zukunft aufzubauen und ganze Gemeinschaften zu verändern.',
    'Your support can make a real difference in the lives of widows and their families in Machakos County, Kenya.': 'Ihre Unterstützung kann einen echten Unterschied im Leben von Witwen und ihren Familien im Landkreis Machakos, Kenia, machen.',
    'Why Your Support Matters': 'Warum Ihre Unterstützung wichtig ist',
    'Every contribution to GINA Royal Foundation creates ripples of change that extend far beyond individual widows. When you support our work, you\'re not just helping one woman—you\'re uplifting an entire family and contributing to the transformation of a whole community.': 'Jeder Beitrag an die GINA Royal Foundation erzeugt Wellen der Veränderung, die weit über einzelne Witwen hinausreichen. Wenn Sie unsere Arbeit unterstützen, helfen Sie nicht nur einer Frau—Sie stärken eine ganze Familie und tragen zur Transformation einer ganzen Gemeinschaft bei.',
    'Partnership Opportunities': 'Partnerschaftsmöglichkeiten',
    'Sustainable Farming': 'Nachhaltige Landwirtschaft',
    'Opportunity:': 'Möglichkeit:',
    'Partner with us on sunflower cultivation and chicken rearing programs': 'Arbeiten Sie mit uns bei Programmen zum Sonnenblumenanbau und zur Geflügelhaltung zusammen',
    'Oil-producing companies for sunflower seed purchases': 'Ölproduzierende Unternehmen für den Ankauf von Sonnenblumenkernen',
    'Agricultural equipment and supplies': 'Landwirtschaftliche Ausrüstung und Materialien',
    'Training and technical support': 'Schulungen und technische Unterstützung',
    'Market linkages for produce': 'Marktanbindung für Erzeugnisse',
    'Impact:': 'Wirkung:',
    'Create sustainable income streams and food security for 30 families': 'Nachhaltige Einkommensquellen und Ernährungssicherheit für 30 Familien schaffen',
    'Education Sponsorship': 'Bildungspatenschaft',
    'Sponsor a child\'s education and break the cycle of poverty': 'Die Ausbildung eines Kindes fördern und den Armutskreislauf durchbrechen',
    'School fees for primary and secondary education': 'Schulgebühren für Primar- und Sekundarstufe',
    'School supplies and uniforms': 'Schulmaterialien und Uniformen',
    'Vocational training programs': 'Berufsausbildungsprogramme',
    'Scholarship funds for higher education': 'Stipendienfonds für höhere Bildung',
    'Keep children in school and create future opportunities': 'Kinder in der Schule halten und Zukunftschancen schaffen',
    'Water Infrastructure': 'Wasserinfrastruktur',
    'Fund critical water access projects': 'Kritische Projekte zum Wasserzugang finanzieren',
    'Borehole drilling (full or partial sponsorship)': 'Brunnenbohrungen (vollständige oder teilweise Förderung)',
    'Water tanks for rainwater collection': 'Wassertanks zur Regenwassersammlung',
    'Maintenance and sustainability programs': 'Wartungs- und Nachhaltigkeitsprogramme',
    'Provide clean water access and save hours of daily labor': 'Zugang zu sauberem Wasser ermöglichen und tägliche Arbeitsstunden einsparen',
    'Skills Training': 'Kompetenztraining',
    'Support vocational training programs': 'Berufliche Trainingsprogramme unterstützen',
    'Traditional basket weaving trainers': 'Trainerinnen und Trainer für traditionelles Korbflechten',
    'Training materials and equipment': 'Trainingsmaterialien und Ausrüstung',
    'Market development support': 'Unterstützung bei der Marktentwicklung',
    'Business skills workshops': 'Workshops zu Geschäftskompetenzen',
    'Empower women with marketable skills and income generation': 'Frauen mit marktfähigen Fähigkeiten und Einkommensmöglichkeiten stärken',
    'Healthcare': 'Gesundheitsversorgung',
    'Support medical camps and wellness programs': 'Gesundheitscamps und Wellness-Programme unterstützen',
    'Medical camp organization and supplies': 'Organisation und Material für Gesundheitscamps',
    'Professional healthcare providers': 'Professionelle Gesundheitsdienstleister',
    'Eye care services and glasses': 'Augenversorgung und Brillen',
    'Diabetes screening and management': 'Diabetes-Screening und -Management',
    'Counseling and mental health support': 'Beratung und Unterstützung der psychischen Gesundheit',
    'Provide essential healthcare to women who otherwise couldn\'t afford it': 'Wesentliche Gesundheitsversorgung für Frauen bereitstellen, die sie sich sonst nicht leisten könnten',
    'Climate Justice': 'Klimagerechtigkeit',
    'Partner on environmental restoration': 'Partner bei der Wiederherstellung der Umwelt',
    'Tree seedlings for planting programs': 'Baumsetzlinge für Pflanzprogramme',
    'Bamboo cultivation support': 'Unterstützung beim Bambusanbau',
    'Renewable energy systems (solar, biogas)': 'Systeme erneuerbarer Energien (Solar, Biogas)',
    'Environmental education programs': 'Umweltbildungsprogramme',
    'Restore the ecosystem and combat climate change at the local level': 'Das Ökosystem wiederherstellen und den Klimawandel auf lokaler Ebene bekämpfen',
    'Ways to Get Involved': 'Möglichkeiten zur Mitwirkung',
    'Corporate Partnerships:': 'Unternehmenspartnerschaften:',
    'Align your CSR goals with our mission and create lasting impact': 'Richten Sie Ihre CSR-Ziele an unserer Mission aus und schaffen Sie nachhaltige Wirkung',
    'Individual Donations:': 'Einzelspenden:',
    'Support specific projects or contribute to our general fund': 'Spezifische Projekte unterstützen oder zu unserem allgemeinen Fonds beitragen',
    'In-Kind Contributions:': 'Sachspenden:',
    'Provide equipment, supplies, or professional services': 'Ausrüstung, Materialien oder professionelle Leistungen bereitstellen',
    'Volunteer:': 'Freiwilligenarbeit:',
    'Share your expertise in training, agriculture, healthcare, or business development': 'Teilen Sie Ihre Expertise in Schulung, Landwirtschaft, Gesundheitsversorgung oder Geschäftsentwicklung',
    'Advocacy:': 'Advocacy:',
    'Spread the word about our work and help us reach more supporters': 'Verbreiten Sie unsere Arbeit und helfen Sie uns, mehr Unterstützende zu erreichen',
    'Donation Details': 'Spendeninformationen',
    'M-Pesa Till Number:': 'M-Pesa-Till-Nummer:',
    'Bank Account:': 'Bankkonto:',
    'Bank Name:': 'Bankname:',
    'Example Bank Kenya': 'Beispielbank Kenia',
    'Account Name:': 'Kontoname:',
    'Account Number:': 'Kontonummer:',
    'Branch:': 'Filiale:',
    'Machakos Branch': 'Filiale Machakos',
    'SWIFT Code:': 'SWIFT-Code:',
    'Please contact us to confirm bank transfer details before sending funds.': 'Bitte kontaktieren Sie uns, um die Banküberweisungsdaten vor dem Senden von Geldern zu bestätigen.',
    'Ready to Make a Difference?': 'Bereit, einen Unterschied zu machen?',
    'Join us in transforming lives and building stronger communities. Together, we can help widows overcome grief, reclaim their dignity, and build sustainable futures for themselves and their families.': 'Begleiten Sie uns dabei, Leben zu verändern und stärkere Gemeinschaften aufzubauen. Gemeinsam können wir Witwen helfen, Trauer zu überwinden, ihre Würde zurückzugewinnen und nachhaltige Zukunft für sich und ihre Familien aufzubauen.',
    'Every contribution, no matter the size, makes a meaningful difference.': 'Jeder Beitrag, egal wie groß, macht einen bedeutenden Unterschied.',
    'Skip to main content': 'Zum Hauptinhalt springen',
    'Make a difference today — Support our mission!': 'Machen Sie heute den Unterschied — Unterstützen Sie unsere Mission!',
    'Toggle menu': 'Menü umschalten',
    'Back to top': 'Nach oben',
    'Close': 'Schließen',
    'EN': 'EN',
    'DE': 'DE'
};

function normalizeText(value) {
    return value.replace(/\s+/g, ' ').trim();
}

function getCurrentPath() {
    return window.location.pathname === '/' ? '/' : window.location.pathname;
}

function getStoredLanguage() {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage === 'de' ? 'de' : 'en';
}

function buildTranslationMap(language) {
    if (language !== 'de') {
        return new Map();
    }

    const translationMap = new Map();
    Object.entries(TRANSLATIONS_DE).forEach(([english, german]) => {
        translationMap.set(normalizeText(english), german);
    });

    return translationMap;
}

// Smooth scroll behavior for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const translationMap = buildTranslationMap('de');
    const translatableNodes = [];

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            if (!node.nodeValue || !normalizeText(node.nodeValue)) {
                return NodeFilter.FILTER_REJECT;
            }

            const parentTag = node.parentElement?.tagName;
            if (parentTag === 'SCRIPT' || parentTag === 'STYLE') {
                return NodeFilter.FILTER_REJECT;
            }

            return NodeFilter.FILTER_ACCEPT;
        }
    });

    while (walker.nextNode()) {
        const textNode = walker.currentNode;
        translatableNodes.push({
            node: textNode,
            original: textNode.nodeValue,
            normalized: normalizeText(textNode.nodeValue)
        });
    }

    function applyLanguage(language) {
        document.documentElement.lang = language;
        localStorage.setItem(LANGUAGE_STORAGE_KEY, language);

        const pageTitle = PAGE_TITLES[getCurrentPath()];
        if (pageTitle) {
            document.title = pageTitle[language];
        }

        translatableNodes.forEach(item => {
            if (language === 'de') {
                const translated = translationMap.get(item.normalized);
                if (translated) {
                    const leadingWhitespace = item.original.match(/^\s*/)?.[0] ?? '';
                    const trailingWhitespace = item.original.match(/\s*$/)?.[0] ?? '';
                    item.node.nodeValue = `${leadingWhitespace}${translated}${trailingWhitespace}`;
                    return;
                }
            }
            item.node.nodeValue = item.original;
        });

        const switchButtons = document.querySelectorAll('.language-switcher button');
        switchButtons.forEach(button => {
            const isActive = button.dataset.lang === language;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        const menuToggleButton = document.querySelector('.menu-toggle');
        if (menuToggleButton) {
            menuToggleButton.setAttribute('aria-label', language === 'de' ? 'Menü umschalten' : 'Toggle menu');
        }

        const backToTopButton = document.querySelector('.back-to-top');
        if (backToTopButton) {
            backToTopButton.setAttribute('aria-label', language === 'de' ? 'Nach oben' : 'Back to top');
        }

        const ctaText = document.querySelector('.sticky-cta-text');
        if (ctaText) {
            ctaText.textContent = language === 'de'
                ? 'Machen Sie heute den Unterschied — Unterstützen Sie unsere Mission!'
                : 'Make a difference today — Support our mission!';
        }

        const ctaButton = document.querySelector('.sticky-cta-btn');
        if (ctaButton) {
            ctaButton.textContent = language === 'de' ? 'Mit uns zusammenarbeiten' : 'Partner With Us';
        }

        const ctaCloseButton = document.querySelector('.sticky-cta-close');
        if (ctaCloseButton) {
            ctaCloseButton.setAttribute('aria-label', language === 'de' ? 'Schließen' : 'Close');
        }

        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.textContent = language === 'de' ? 'Zum Hauptinhalt springen' : 'Skip to main content';
        }
    }

    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Toggle menu');
    menuToggle.innerHTML = '<span></span><span></span><span></span>';

    const nav = document.querySelector('nav');
    const headerContent = document.querySelector('.header-content');

    if (headerContent && nav) {
        const languageSwitcher = document.createElement('div');
        languageSwitcher.className = 'language-switcher';
        languageSwitcher.innerHTML = `
            <button type="button" data-lang="en" aria-label="Switch to English">EN</button>
            <button type="button" data-lang="de" aria-label="Auf Deutsch wechseln">DE</button>
        `;

        const headerControls = document.createElement('div');
        headerControls.className = 'header-controls';

        headerControls.appendChild(languageSwitcher);
        headerControls.appendChild(menuToggle);
        headerContent.appendChild(headerControls);

        languageSwitcher.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                applyLanguage(button.dataset.lang);
            });
        });

        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
                nav.classList.remove('active');
            }
        });
    }

    // Back to top button
    const backToTop = document.createElement('a');
    backToTop.href = '#';
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Smooth scroll to top
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Sticky CTA Bar
    const stickyCTA = document.createElement('div');
    stickyCTA.className = 'sticky-cta';
    stickyCTA.innerHTML = `
        <div class="sticky-cta-content">
            <span class="sticky-cta-text">Make a difference today — Support our mission!</span>
            <a href="/support.html" class="sticky-cta-btn">Partner With Us</a>
        </div>
        <button class="sticky-cta-close" aria-label="Close">×</button>
    `;
    document.body.appendChild(stickyCTA);

    // Show sticky CTA after scrolling
    let ctaDismissed = sessionStorage.getItem('ctaDismissed');

    window.addEventListener('scroll', function() {
        if (!ctaDismissed && window.pageYOffset > 500) {
            stickyCTA.classList.add('visible');
        }
    });

    // Close sticky CTA
    const closeCTA = stickyCTA.querySelector('.sticky-cta-close');
    closeCTA.addEventListener('click', function() {
        stickyCTA.classList.remove('visible');
        sessionStorage.setItem('ctaDismissed', 'true');
    });

    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add id to main if it doesn't exist
    const mainElement = document.querySelector('main');
    if (mainElement && !mainElement.id) {
        mainElement.id = 'main';
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('nav a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active state to navigation items on scroll
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.style.color = 'var(--secondary-color)';
                } else {
                    navLink.style.color = '';
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.value-card, .project-card, .support-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    applyLanguage(getStoredLanguage());
});
