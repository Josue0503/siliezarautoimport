/**
 * Calcula los Fees de Copart U.S. Licensed
 * Incluye cargos de Banco ($30) y Título ($20)
 */
function calcularFeesCopart(bid) {
    let auctionFee = 0;
    let virtualFee = 0;
    const gateFee = 95.00;
    const envFee = 15.00;
    const bankFee = 30.00;   // Cargo por transferencia bancaria
    const titleFee = 20.00;  // Cargo por envío de título FedEx

    // 1. Auction Fee (Basado en tu tabla de Secured Payment)
    if (bid >= 0 && bid <= 49.99) auctionFee = 25.00;
    else if (bid <= 99.99) auctionFee = 45.00;
    else if (bid <= 199.99) auctionFee = 80.00;
    else if (bid <= 299.99) auctionFee = 130.00;
    else if (bid <= 349.99) auctionFee = 137.50;
    else if (bid <= 399.99) auctionFee = 145.00;
    else if (bid <= 449.99) auctionFee = 175.00;
    else if (bid <= 499.99) auctionFee = 185.00;
    else if (bid <= 549.99) auctionFee = 205.00;
    else if (bid <= 599.99) auctionFee = 210.00;
    else if (bid <= 699.99) auctionFee = 240.00;
    else if (bid <= 799.99) auctionFee = 270.00;
    else if (bid <= 899.99) auctionFee = 295.00;
    else if (bid <= 999.99) auctionFee = 320.00;
    else if (bid <= 1199.99) auctionFee = 375.00;
    else if (bid <= 1299.99) auctionFee = 395.00;
    else if (bid <= 1399.99) auctionFee = 410.00;
    else if (bid <= 1499.99) auctionFee = 430.00;
    else if (bid <= 1599.99) auctionFee = 445.00;
    else if (bid <= 1699.99) auctionFee = 465.00;
    else if (bid <= 1799.99) auctionFee = 485.00;
    else if (bid <= 1999.99) auctionFee = 510.00;
    else if (bid <= 2399.99) auctionFee = 535.00;
    else if (bid <= 2499.99) auctionFee = 570.00; // Aquí cae tu ejemplo de 2400
    else if (bid <= 2999.99) auctionFee = 610.00;
    else if (bid <= 3499.99) auctionFee = 655.00;
    else if (bid <= 3999.99) auctionFee = 705.00;
    else if (bid <= 4499.99) auctionFee = 725.00;
    else if (bid <= 4999.99) auctionFee = 750.00;
    else if (bid <= 5499.99) auctionFee = 775.00;
    else if (bid <= 5999.99) auctionFee = 800.00;
    else if (bid <= 6499.99) auctionFee = 825.00;
    else if (bid <= 6999.99) auctionFee = 845.00;
    else if (bid <= 7499.99) auctionFee = 880.00;
    else if (bid <= 7999.99) auctionFee = 900.00;
    else if (bid <= 8499.99) auctionFee = 925.00;
    else if (bid <= 8999.99) auctionFee = 945.00;
    else if (bid <= 14999.99) auctionFee = 1000.00;
    else auctionFee = bid * 0.075;

    // 2. Virtual Bid Fee (Live Bid)
    if (bid >= 0 && bid <= 99.99) virtualFee = 0;
    else if (bid <= 499.99) virtualFee = 50.00;
    else if (bid <= 999.99) virtualFee = 65.00;
    else if (bid <= 1499.99) virtualFee = 85.00;
    else if (bid <= 1999.99) virtualFee = 95.00;
    else if (bid <= 3999.99) virtualFee = 110.00;
    else if (bid <= 5999.99) virtualFee = 125.00;
    else if (bid <= 7999.99) virtualFee = 145.00;
    else virtualFee = 160.00;

    return auctionFee + virtualFee + gateFee + envFee + bankFee + titleFee;
}