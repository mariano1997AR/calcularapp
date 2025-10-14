import jsPDF from 'jspdf';

/*
type FormData  = {
    nombreCompleto: string;
    Dni: string;
    direccion: string;
    telefono: string;
    email: string;
   
};*/

export interface DatosPDF {
  nombreEmisor: string;
  nombreEmpresaPedido:string;
  nombreNegocio:string;
  localidad: string;
  direccion:string;
  telefono:string;
  firma: string; // base64
  email:string;
}

export const generarPDF = (datos:DatosPDF) => {
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Pedidos para entrega",105,15,{align:'center'});




    //Dibujo de bordes de los campos
    const campoWidth = 180;
    const campoHeight = 10;

    let y = 30;
    
    //subtitulo
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.text("Datos del emisor",10, y);
    y +=10;


    doc.setFontSize(14);
    //nombre
    doc.rect(10,y,campoWidth,campoHeight);
    doc.text(`Nombre Completo: ${datos.nombreEmisor}`, 12, y + 7);
    y +=20;

    //nombre de la empresa del pedido
    doc.rect(10,y,campoWidth,campoHeight);
    doc.text(`Nombre de la empresa del pedido: ${datos.nombreEmpresaPedido}`, 12, y + 7);
    y +=20;

    doc.rect(10,y,campoWidth,campoHeight);
    doc.text(`Nombre del negocio: ${datos.nombreNegocio}`, 12, y + 7);
    y +=20;
    
    //dni
    doc.rect(10,y,campoWidth,campoHeight)
    doc.text(`Localidad: ${datos.localidad}`, 12, y + 7);
    y +=20;
    
    
    //direccion
    doc.rect(10,y,campoWidth,campoHeight);
    doc.text(`Dirección: ${datos.direccion}`, 12, y + 7);
    y +=20;
    
    //telefono
    doc.rect(10,y,campoWidth,campoHeight);
    doc.text(`Teléfono: ${datos.telefono}`, 12, y + 7);
    y +=20;
    
    //email
    doc.rect(10,y,campoWidth,campoHeight)
    doc.text(`Email: ${datos.email}`, 12, y + 7);
    y +=30;
    

    if(datos.firma){
        doc.text('Firma del cliente',10,y);
        doc.addImage(datos.firma,'PNG',10,y + 5,180,60);
    }

    doc.save(`comprobante_${datos.nombreEmpresaPedido}.pdf`);
}