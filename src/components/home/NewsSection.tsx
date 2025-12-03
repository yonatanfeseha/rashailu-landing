import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import img7 from "@/assets/img7.jpg";
import img8 from "@/assets/img8.jpg";
import img10 from "@/assets/img10.jpg";
import img11 from "@/assets/img11.jpg";
import img12 from "@/assets/img12.jpg";
import img13 from "@/assets/img13.jpg";
import img14 from "@/assets/img14.jpg";
import img15 from "@/assets/img15.jpg";
import img16 from "@/assets/img16.jpg";
import img17 from "@/assets/img17.jpg";
import img18 from "@/assets/img18.jpg";
import img19 from "@/assets/img19.jpg";

const newsItems = [
  {
    id: 1,
    images: [img1, img2, img3],
    title: "",
    description:
      "በአዲስአበባ ከተማ አስተዳደር ወጣቶች እና ስፖርት ቢሮ የራስኃይሉ ስፖርት ትምህርትና ስልጠና ማዕከል የልዩ ስልጠና ሰልጣኞች ከልምምድ በኋላ የምግብ አገልግሎታቸውን ጀምረዋል፡፡ እድሜያቸው ከ11 ዓመት በታች የሆናቸው ታዳጊ ወጣቶች በማእከሉ ስልጠና የጀመሩት ከሁለት ዓመት በፊት ቢሆንም የምግብ አገልግሎት ሳያገኙ ስልጠናውን የሚከታተሉ ቢሆንም የማዕከሉ አመራር ባደረገው ከፍተኛ ጥረት ከጥር 6/2017 ዓ.ም ጀምሮ በሳምንት ሶስት ቀናት ከሚኖራቸው ስልጠና በኋላ በማእከሉ የስፖርትና መዝናኛ ቡድን አማካይነት አገልግሎቱ የሚቀጥል ይሆናል፡፡",
    more: "ማዕከሉ በቅርጫት ኳስ፣ በቴኒስ እና በካራቴስፖርት 40 ወንድና 40 ሴት በድምሩ ለ80 ሰልጣኞች ስልጠናእ የሰጠ የሚገኝ ሲሆን ጥር 6 ስልጠና የነበራቸው የቅርጫትኳስና ቴኒስ ሰልጣኞች በምገባው መክፈቻ ፕሮግራም ላይ እያሉ የማዕከሉ ስራ አስኪያጅ አቶ በኃይሉ በቀለ፣ የስፖርት ትምህርት ስልጠና ቡድን መሪ አቶ ዮሴፍ ሳህሉ እና የስፖርትና መዝናኛ ቡድን መሪ ወ/ሪት አትጠገብ ተገኝተው ለሠልጣኞቹ ምገባው እንደሚቀጥል እና ከስፖርቱ በተጨማሪ በመደበኛት ትምህርታቸውም የላቀ ውጤት እንዲያመጡ ማዕከሉም በዚህ ዙሪያ ድጋፍና ክትትል እንደሚያደርግ ለሰልጣኞቹ አሳስበዋቸዋል። በመርሐግብሩ ላይ የቅርጫት ኳስአሰልጣን ደረጀ ተገኝቷል፡፡",
  },
  {
    id: 2,
    images: [img4, img5, img6],
    title: "",
    description:
      "የራስ ኃይሉ ስፖርት ትምህርትና ስልጠና ማዕከል ሰራተኞች ዘወትር አርብ ከጠዋቱ 1፡30 እስከ 2፡30 ግቢያቸውን በማጽዳት ሥራ ላይ",
  },
  {
    id: 3,
    images: [img7, img8],
    title: "",
    description:
      "በ አዲስአበባ ወጣቶችና ስፖርት ቢሮ የራስኃይሉ ስፖርት ትምህርትና ስልጠና ማዕከል የታዳጊ ወጣቶች ስፖርት ስልጠና ልማት ፕሮግራም የልዩ ስልጠና ተሳታፊዎች ምገባ ለመጀመሪያ ጊዜ ጥር 6/2017 ዓ.ም የቴኒስና ቅርጫትኳስ ሰልጣኞች መጀመራቸውይታወሳል።",
    more: "ቀሪዎቹ የካራቴ ሰልጣኞች ጥር 7/2017 ዓ.ም በዚህ መልኩ ምግባቸውን አድርገዋል። ከዚህ በኋላ በሳምንት ሦስት ቀናት በሚኖራቸው ስልጠና ምገባውየሚቀጥልይሆናል፤",
  },
  {
    id: 4,
    images: [img10, img11, img12],
    title: "",
    description:
      "የ ራስኃይሉ ስ/ት/ስ/ማሰራተኞችበ22/05/2017 ዓ.ም በራሳቸው ተነሳሽነት የአብሮነትና የአንድነት ፕሮግራም በማዘጋጀት ያላቸውን ተግባቦት አሳይተዋል።",
  },
  {
    id: 5,
    images: [img13, img14, img15],
    title: "",
    description:
      "የራስኃይሉ ስፖርት ትምህርት ስልጠና ማዕከል ሠራተኞች አዲስአበባን በመወከል በሀገርአቀፉ የታዳጊ ምዘና ውድድር ላይ ለሚሳተፉ አካላት ለሚካሄደው የሽኝት መርሐግብር በምግብ ዝግጅት ሥራ ላይ ጥር 22/2017ዓ.ም።",
  },
  {
    id: 6,
    images: [img16, img17, img18, img19],
    title: "",
    description:
      "ጥር 24/2017ዓ.ም የአዲስአበባ ወጣቶችና ስፖርት ቢሮ አዲስአበባን ወክሎ በሀገርአቀፍ የታዳጊ ወጣቶች የምዘና ውድድር ላይ በ12 የስፖርት ዓይነት ለሚሳተፈው የልዑካን ቡድንበራስኃይሉ ስፖርትትምህርትናስልጠናማዕከል በተካሄደ የሽኝት መርሐግብር ላይ የቢሮው ኃላፊአቶበላይደጀን...",
    more: "የምዘና ውድድርን በፍጹም ስፖርታዊ ጨዋነት አጠናቃችሁ እንድትመለሱ እመኛለሁ በማለት መልዕክትያስተላልፉና የአዲስአበባከተማ አስተዳደርን ስፖርት ምክርቤት አርማን ለስፖርተኞች ተወካዮች ያስረከቡ ሲሆን ማዕከሉም ለልዑክንቡድኑና በሽኝት መርሐግብሩ ላይ ለተሳተፉ ከ600 በላይ ለሚሆኑ አካላት የምግብ መስተንግዶ ሰጥቷል፡፡",
  },
];

const NewsCard = ({ item }: { item: (typeof newsItems)[0] }) => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % item.images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + item.images.length) % item.images.length);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
      {/* Image Slider */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
        <img
          src={item.images[index]}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <Button
            variant="secondary"
            size="icon"
            onClick={prev}
            className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
            {item.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index ? "bg-primary w-6" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>
          <Button
            variant="secondary"
            size="icon"
            onClick={next}
            className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-6">
        <div className="card-gradient rounded-2xl p-8 border border-border">
          <h3 className="font-heading font-bold text-2xl mb-4">{item.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {item.description}
          </p>

          {/* Read More only for ids 1,3,6 */}
          {[1, 3, 6].includes(item.id) && (
            <>
              <Button
                className="mt-6"
                variant="outline"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Read More"}
              </Button>
              {showMore && (
                <p className="text-muted-foreground mt-4">{item.more}</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const NewsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-medium tracking-wider mb-2">
            LATEST
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl">
            News & Updates
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Stay updated with the latest news and developments from our training
            center.
          </p>
        </div>

        {newsItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
