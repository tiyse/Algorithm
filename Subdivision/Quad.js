// Başlangıçta bir quad (dörtgen) yüzey tanımlayın
var quadVertices = [
    -0.5, 0.5,  // Sol üst köşe
    0.5, 0.5,   // Sağ üst köşe
    -0.5, -0.5, // Sol alt köşe
    0.5, -0.5   // Sağ alt köşe
];

// Subdivision işlemi
function subdivideQuad(vertices) {
    var subdividedVertices = [];

    for (var i = 0; i < vertices.length - 2; i += 2) {
        var x1 = vertices[i];
        var y1 = vertices[i + 1];
        var x2 = vertices[i + 2];
        var y2 = vertices[i + 3];

        // Orta noktayı hesapla
        var midX = (x1 + x2) / 2.0;
        var midY = (y1 + y2) / 2.0;

        // Yeni alt dörtgeni oluştur
        subdividedVertices.push(x1, y1, midX, midY, midX, midY, x2, y2);
    }

    return subdividedVertices;
}

// Subdivision işlemini uygula (örneğin, 3 kez uygulanabilir)
for (var i = 0; i < 3; i++) {
    quadVertices = subdivideQuad(quadVertices);
}

// Subdivision sonucunu kullanarak quad'ı çiz
// OpenGL veya WebGL gibi bir grafik API kullanarak bu çizimi gerçekleştirmelisiniz.
