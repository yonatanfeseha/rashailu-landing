import React from "react";
import { Layout } from "@/components/layout/Layout";
import "./restaurant.css"; // Make sure this path is correct

const menuItems = {
  "ትኩስ ነገር": [
    { name: "ሻይ", price: "7.00 ብር" },
    { name: "የማሽን ቡና", price: "20.00 ብር" },
    { name: "እስፕሪስ", price: "15.00 ብር" },
    { name: "ወተት", price: "25.00 ብር" },
    { name: "ማኪያቶ", price: "20.00 ብር" },
    { name: "ቀሽር", price: "12.00 ብር" },
    { name: "ብርቱካን ሻይ", price: "20.00 ብር" },
    { name: "ለውዝ ሻይ", price: "28.00 ብር" },
    { name: "የጀበና ቡና", price: "15.00 ብር" },
  ],
  መጠጥ: [
    { name: "ለስላሳ", price: "25.00 ብር" },
    { name: "የታሸገ ውሀ ትንሹ", price: "17.00 ብር" },
    { name: "የታሸገ ውሀ 1 ሊትር", price: "25.00 ብር" },
    { name: "የታሸገ ውሀ 2 ሊትር", price: "30.00 ብር" },
    { name: "ሻይ በሎሚ", price: "8.00 ብር" },
    { name: "አምቦ ውሃ", price: "25.00 ብር" },
  ],
  ቁርስ: [
    { name: "እስፔሻል ፉል", price: "62.00 ብር" },
    { name: "እንቁላል ፍርፍር", price: "62.00 ብር" },
    { name: "እንጀራ ፍርፍር", price: "60.00 ብር" },
    { name: "ዳቦ ፍርፍር", price: "37.00 ብር" },
    { name: "እንቁላል ሳንድዊች", price: "37.00 ብር" },
    { name: "ፉል (በሁለት ዳቦ)", price: "49.00 ብር" },
  ],
  ምሳ: [
    { name: "እስፓጌቲ በቲማቲም ስልስ", price: "100.00 ብር" },
    { name: "ፓስታ በአትክልት", price: "100.00 ብር" },
    { name: "ሩዝ በቲማቲም ስልስ", price: "63.00 ብር" },
    { name: "ሩዝ በአትክልት", price: "93.00 ብር" },
    { name: "መኮረኒ በቲማቲም ስልስ", price: "82.00 ብር" },
    { name: "መኮረኒ በአትክልት", price: "85.00 ብር" },
    { name: "አትክልት የበሰለ", price: "84.00 ብር" },
    { name: "ሚኒስትሮኒ ሾርባ", price: "85.00 ብር" },
    { name: "ሙሉ ምሳ (የፆም)", price: "175.00 ብር" },
    { name: "ሽሮ ፈሰስ", price: "72.00 ብር" },
    { name: "ተጋቢኖ", price: "80.00 ብር" },
    { name: "ደረቅ እንጀራ", price: "22.00 ብር" },
    { name: "ዳቦ", price: "8.00 ብር" },
  ],
};

const Restaurant = () => {
  return (
    <Layout>
      <div className="restaurant-page">
        <div className="menu-container mt-24 mb-12">
          <h1>የራስ ኃይሉ ስፖርት፣ ትምህርትና ስልጠና ማዕከል ካፌና ሬስቶራንት</h1>
          <h2>የምግብ እና መጠጥ ዋጋ ዝርዝር</h2>
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category}>
              <h2>{category}</h2>
              {items.map((item) => (
                <div key={item.name} className="menu-item">
                  <span>{item.name}</span>
                  <span className="price">{item.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Restaurant;
