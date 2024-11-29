import { IOffer } from "../modules/orders/offer.interface";
import path from "path";
import fs from "fs";
import PDFDocument from "pdfkit"; // Assuming you are using pdfkit

export const generateOfferPDF = async (offer: IOffer): Promise<string> => {
  const doc = new PDFDocument();
  
  const fileName = `offer_${Date.now()}.pdf`;
  const filePath = path.join(__dirname, "../../uploads", fileName); // Save the file in the uploads directory

  // Pipe the PDF output to a file
  doc.pipe(fs.createWriteStream(filePath));


  doc.fontSize(16).text(`Offer for Project: ${offer.projectName}`, { align: "center" });
  doc.text(`Description: ${offer.description}`, { align: "left" });
  doc.text(`Agreement Type: ${offer.agreementType}`, { align: "left" });
  doc.text(`Total Price: ${offer.totalPrice}`, { align: "left" });

  if (offer.agreementType === "Flat Fee") {
    doc.text(`Flat Fee Price: ${offer.flatFee?.price}`, { align: "left" });
  } else if (offer.agreementType === "Hourly Fee") {
    doc.text(`Hourly Rate: ${offer.hourlyFee?.pricePerHour}`, { align: "left" });
  } else if (offer.agreementType === "Milestone") {
    doc.text(`Milestones:`, { align: "left" });
    offer.milestones.forEach((milestone, index) => {
      doc.text(`Milestone ${index + 1}: ${milestone.title} - $${milestone.price}`, { align: "left" });
    });
  }

  
  doc.end();

  return filePath;
};
