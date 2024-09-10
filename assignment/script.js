document.getElementById("generatePDF").addEventListener("click", function () {
    var doc = new jsPDF();
    
    // Convert HTML to PDF
    doc.fromHTML(document.body, 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });

    doc.save('invoice.pdf');
});

// Example dynamic data
let invoiceData = {
    seller: {
        name: "ABC Pvt. Ltd.",
        address: "123 Street, City, State, 123456",
        pan: "AAAPL1234C",
        gst: "22AAAAA0000A1Z5"
    },
    billing: {
        name: "John Doe",
        address: "789 Market Street",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400001",
        stateCode: "27"
    },
    shipping: {
        name: "Jane Doe",
        address: "789 Market Street",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400001",
        stateCode: "27"
    },
    order: {
        orderNo: "123456",
        invoiceNo: "INV-987654",
        orderDate: "2024-09-01",
        invoiceDate: "2024-09-02",
        reverseCharge: "No"
    },
    items: [
        { description: "Laptop", unitPrice: 50000, quantity: 1, discount: 0, taxRate: 18 },
        { description: "Mobile Phone", unitPrice: 20000, quantity: 2, discount: 500, taxRate: 18 }
    ],
    signatureImage: "signature.png"
};

// Populating placeholders with dynamic data
document.getElementById("sellerName").innerText = invoiceData.seller.name;
document.getElementById("sellerAddress").innerText = invoiceData.seller.address;
document.getElementById("sellerPAN").innerText = `PAN No: ${invoiceData.seller.pan}`;
document.getElementById("sellerGST").innerText = `GST Reg No: ${invoiceData.seller.gst}`;

document.getElementById("billingName").innerText = invoiceData.billing.name;
document.getElementById("billingAddress").innerText = invoiceData.billing.address;
document.getElementById("billingState").innerText = `${invoiceData.billing.city}, ${invoiceData.billing.state}, ${invoiceData.billing.pincode}, State Code: ${invoiceData.billing.stateCode}`;

document.getElementById("shippingName").innerText = invoiceData.shipping.name;
document.getElementById("shippingAddress").innerText = invoiceData.shipping.address;
document.getElementById("shippingState").innerText = `${invoiceData.shipping.city}, ${invoiceData.shipping.state}, ${invoiceData.shipping.pincode}, State Code: ${invoiceData.shipping.stateCode}`;

document.getElementById("orderNo").innerText = invoiceData.order.orderNo;
document.getElementById("invoiceNo").innerText = invoiceData.order.invoiceNo;
document.getElementById("orderDate").innerText = invoiceData.order.orderDate;
document.getElementById("invoiceDate").innerText = invoiceData.order.invoiceDate;
document.getElementById("reverseCharge").innerText = invoiceData.order.reverseCharge;

let itemTableBody = document.getElementById("itemTableBody");
let totalAmount = 0;

// Populate item table dynamically
invoiceData.items.forEach(item => {
    let netAmount = item.unitPrice * item.quantity - item.discount;
    let taxAmount = netAmount * (item.taxRate / 100);
    let total = netAmount + taxAmount;

    totalAmount += total;

    let row = `<tr>
        <td>${item.description}</td>
        <td>₹${item.unitPrice}</td>
        <td>${item.quantity}</td>
        <td>₹${item.discount}</td>
        <td>₹${netAmount.toFixed(2)}</td>
        <td>${item.taxRate}%</td>
        <td>₹${taxAmount.toFixed(2)}</td>
        <td>₹${total.toFixed(2)}</td>
    </tr>`;

    itemTableBody.innerHTML += row;
});

document.getElementById("totalAmount").innerText = `₹${totalAmount.toFixed(2)}`;
document.getElementById("amountInWords").innerText = `Amount in words: ${convertNumberToWords(totalAmount)} rupees`;

document.getElementById("signatureImage").src = invoiceData.signatureImage;
document.getElementById("sellerSignatureName").innerText = invoiceData.seller.name;

// Convert number to words (simplified)
function convertNumberToWords(amount) {
    // Logic for number to words conversion
    return "twenty-five thousand only";
}
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Example data - replace with actual dynamic data
    const invoiceData = {
        seller: {
            name: "ABC Pvt Ltd",
            address: "123 Street",
            city: "City",
            state: "State",
            pincode: "123456",
            pan: "ABCDE1234F",
            gst: "12ABCDE1234F1Z5"
        },
        placeOfSupply: "State",
        billing: {
            name: "John Doe",
            address: "456 Avenue",
            city: "City",
            state: "State",
            pincode: "654321",
            code: "01"
        },
        shipping: {
            name: "Jane Smith",
            address: "789 Boulevard",
            city: "City",
            state: "State",
            pincode: "112233",
            code: "02"
        },
        order: {
            no: "ORD123",
            date: "2024-09-09"
        },
        invoice: {
            no: "INV123",
            date: "2024-09-09"
        },
        reverseCharge: "No",
        items: [
            {
                description: "Item 1",
                unitPrice: 100,
                quantity: 2,
                discount: 10,
                taxRate: 18
            },
            {
                description: "Item 2",
                unitPrice: 150,
                quantity: 1,
                discount: 5,
                taxRate: 18
            }
        ],
        signature: {
            imageUrl: "signature-placeholder.png", // URL to the signature image
            name: "John Doe" // Name of the person signing
        }
    };

    // Populate data
    document.getElementById('seller-name').textContent = invoiceData.seller.name;
    document.getElementById('seller-address').textContent = invoiceData.seller.address;
    document.getElementById('seller-city').textContent = invoiceData.seller.city;
    document.getElementById('seller-state').textContent = invoiceData.seller.state;
    document.getElementById('seller-pincode').textContent = invoiceData.seller.pincode;
    document.getElementById('seller-pan').textContent = invoiceData.seller.pan;
    document.getElementById('seller-gst').textContent = invoiceData.seller.gst;

    document.getElementById('place-of-supply').textContent = invoiceData.placeOfSupply;

    document.getElementById('billing-name').textContent = invoiceData.billing.name;
    document.getElementById('billing-address').textContent = invoiceData.billing.address;
    document.getElementById('billing-city').textContent = invoiceData.billing.city;
    document.getElementById('billing-state').textContent = invoiceData.billing.state;
    document.getElementById('billing-pincode').textContent = invoiceData.billing.pincode;
    document.getElementById('billing-code').textContent = invoiceData.billing.code;

    document.getElementById('shipping-name').textContent = invoiceData.shipping.name;
    document.getElementById('shipping-address').textContent = invoiceData.shipping.address;
    document.getElementById('shipping-city').textContent = invoiceData.shipping.city;
    document.getElementById('shipping-state').textContent = invoiceData.shipping.state;
    document.getElementById('shipping-pincode').textContent = invoiceData.shipping.pincode;
    document.getElementById('shipping-code').textContent = invoiceData.shipping.code;

    document.getElementById('order-no').textContent = invoiceData.order.no;
    document.getElementById('order-date').textContent = invoiceData.order.date;

    document.getElementById('invoice-no').textContent = invoiceData.invoice.no;
    document.getElementById('invoice-date').textContent = invoiceData.invoice.date;

    document.getElementById('reverse-charge').textContent = invoiceData.reverseCharge;

    const itemsBody = document.getElementById('items-body');
    let totalAmount = 0;

    invoiceData.items.forEach(item => {
        const netAmount = (item.unitPrice * item.quantity) - item.discount;
        const taxType = (invoiceData.placeOfSupply === invoiceData.shipping.state) ? "CGST & SGST" : "IGST";
        const taxAmount = netAmount * (item.taxRate / 100);
        const totalItemAmount = netAmount + taxAmount;

        totalAmount += totalItemAmount;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.description}</td>
            <td>${item.unitPrice.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>${item.discount.toFixed(2)}</td>
            <td>${netAmount.toFixed(2)}</td>
            <td>${item.taxRate}%</td>
            <td>${taxAmount.toFixed(2)}</td>
            <td>${totalItemAmount.toFixed(2)}</td>
        `;
        itemsBody.appendChild(row);
    });

    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);

    // Function to convert amount to words
    function convertNumberToWords(num) {
        // Simple implementation or you can use a library for this
        const a = ['','one','two','three','four','five','six','seven','eight','nine','ten',
            'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
        const b = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

        if ((num = num.toString()).length > 9) return 'overflow';
        let n = ('000000000' + num).substr(-9).match(/^(\d{1,3})(\d{3})(\d{3})(\d{3})$/);
        if (!n) return;
        let str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' hundred ') : '';
        str += (n[2] != 0) ? (b[n[2][0]] + ' ' + a[n[2][1]] + ' ') : '';
        str += (n[3] != 0) ? (b[n[3][0]] + ' ' + a[n[3][1]] + ' ') : '';
        str += (n[4] != 0) ? (b[n[4][0]] + ' ' + a[n[4][1]] + ' ') : '';
        return str.trim();
    }

    document.getElementById('amount-in-words').textContent = convertNumberToWords(totalAmount);

    // Handle signature
    const signatureImage = document.getElementById('signatureImage');
    const signaturePlaceholder = document.getElementById('signaturePlaceholder');
    const signatureData = invoiceData.signature;

    if (signatureData && signatureData.imageUrl) {
        signatureImage.src = signatureData.imageUrl;
        signatureImage.style.display = 'block';
        signaturePlaceholder.style.display = 'none';
    } else {
        signatureImage.style.display = 'none';
        signaturePlaceholder.style.display = 'inline-block';
    }

    document.getElementById('sellerSignatureName').textContent = signatureData.name;
});

