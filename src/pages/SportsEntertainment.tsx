import React from "react";
import { Layout } from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      {/* Welcome Section */}
      <div className="bg-gray-800 text-white py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">WELCOME TO</h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-red-600">
          RAS HAILU SPORT EDUCATION & TRAINING CENTER
        </h2>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-red-600 mb-4">ራዕይ</h3>
            <p>ስፖርትን ባህሉ ያደረገ ጤናማ ዜጋ ፣ብቃት ያለው ስፖርተኛና ተጠቃሚ የሆነ ሕብረተሰብ መፍጠር፤</p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-red-600 mb-4">ተልዕኮ</h3>
            <p>
              ጠንካራ ህዝባዊ መሠረት ያላቸው የስፖርት አደረጃጀቶችን በማጎልበት፣ የማኅበረሰቡን የስፖርት ተሳትፎ
              በማረጋገጥ፣ በአካልና በአዕምሮ የዳበረ ጤናማና አምራች ዜጋን በማፍራት፣ በሀገር ብሎም በዓለም አቀፍ
              ደረጃ ብቁ ተወዳዳሪ የሆነ ምርጥ ስፖርተኛ ማፍራት ነው፡፡
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-red-600 mb-4">እሴቶች</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>ተጠያቂነት</li>
              <li>ግልጽነት</li>
              <li>የላቀ አገልግሎት መስጠት</li>
              <li>ለለውጥ ዝግጁነት</li>
              <li>በእውቀትና በእምነት መምራት /መስራት/</li>
              <li>ምቹና ተመራጭ ተቋም መፍጠር</li>
              <li>ስፖርትን ባህሉ ያደረገ ህብረተሰብና ብቃት ያለው ስፖርተኛ ማፍራት</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
