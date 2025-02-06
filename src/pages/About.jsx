export default function About() {
    return (
      <div className="flex justify-center items-center w-full py-20 px-8">
        <div className="flex flex-col justify-center items-center gap-5 text-center max-w-4xl">
          {/* Main Heading */}
          <h1 className="font-sans font-semibold text-3xl leading-tight">
            Jewelry for Men and Women: The Aurora Luxe Glow
          </h1>
  
          {/* Sections */}
          {[
            {
              title: "SIGNATURE RINGS AND EARRINGS",
              paragraphs: [
                "Hear the name Aurora Luxe, and watches are probably the first thing that comes to mind. Beautiful, luxurious, yet affordable timepieces we couldn’t be prouder of. Still, there is so much more to Aurora Luxe. We have taken the same passion for design and obsession for craftsmanship and poured it into our jewelry collection for men and women.",
                "Just like the watches, our jewelry has a distinct look. Browse, for example, our collection of rings for women, and you’ll find pieces like the Elevation Ring or the Classic Ring. Apart from the carefully engraved Aurora Luxe logo, notice what the two rings have in common. A clear style and a sense of refined minimalism permeate our jewelry and watches. That’s why you can mix and match pieces from our collection, even if they’re of different colors. For example, you can wear a rose gold ring with a pair of silver small hoop earrings from our selection of earrings for women, and they will go together wonderfully. Likewise, men can wear stackable rings with our watches for a well-rounded look.",
                "To fans of the matchy-matchy style, we recommend creating your own necklace and earring set. For example, you can pair rose gold earrings from the Emalie Collection with a lovely necklace from the same series. By the same token, the black stud earrings from the Aspiration series go together wonderfully with our black watches.",
              ],
            },
            {
              title: "DESIGN NECKLACES AND BRACELETS",
              paragraphs: [
                "Now think “statement jewelry” and see what comes to mind. We bet it’s probably something big, extravagant, with extra “bling.” Well, at Aurora Luxe we aim to redefine that too. Our jewelry doesn’t have to be flashy to make an impression, and proof of that is our collection of necklaces for women. For example, the Elan Unity rose gold necklace can become a subtle yet powerful token of your lasting love if you’re browsing necklaces for your girlfriend. More so, even minimalist jewelry can have a bit of sparkle. The Elan Lumine silver necklace will add shimmer to your look without feeling excessive. Achieve the same effect, without the brilliance of stones, by wearing a radiant gold necklace like the Elan or, if you’re more into bracelets, with a rose gold bracelet for women.",
                "Statement jewelry is not reserved only for women. Most of our jewelry is unisex, so men too can elevate their look with a few bold pieces. For example, the rose gold bangles from the Elan or Emalie Collection or the Classic men’s rose gold bracelet elevate a casual look. The Elan silver bracelet or a combination of silver bangles from our collection fits perfectly with an outfit with grunge influences.",
              ],
            },
            {
              title: "MATCHING JEWELRY AT YOUR FINGERTIPS",
              paragraphs: [
                "We touched upon matching jewelry, but if you’re not into that, simply go for a premade jewelry gift set. Choose for example a rose gold jewelry set, with the Elan Unity necklace and bracelet. For men, we have gift sets with watches and silver jewelry, such as the Iconic Link and the Classic Bracelet. If you can’t get enough gold jewelry, there are many options available within the Aurora Luxe selection. Choose a watch and jewelry set, like the Quadro Unitone watch and the Elan bracelet, or go for a matching set with the Elan Unity necklace and bracelet. So, whether you're going for a gift set or assembling your own, add some Aurora Luxe glow to your look.",
              ],
            },
          ].map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-wide">{section.title}</h2>
              {section.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-sm text-gray-800 leading-relaxed tracking-wide">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  