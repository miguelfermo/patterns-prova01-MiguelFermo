// Classes concretas
class PdfReport {
  generate() {
    return "Relatório em PDF gerado!";
  }
}

class PdfInvoice {
  generate() {
    return "Fatura em PDF gerada!";
  }
}

class DocxReport {
  generate() {
    return "Relatório em DOCX gerado!";
  }
}

class DocxInvoice {
  generate() {
    return "Fatura em DOCX gerada!";
  }
}

// Cliente
function main(format) {
  let report, invoice;

  if (format === "pdf") {
    report = new PdfReport();
    invoice = new PdfInvoice();
  } else if (format === "docx") {
    report = new DocxReport();
    invoice = new DocxInvoice();
  } else {
    throw new Error("Formato não suportado");
  }

  console.log(report.generate());
  console.log(invoice.generate());
}

main("pdf");
main("docx");
