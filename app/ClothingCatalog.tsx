'use client'

import { useState } from 'react'
import { Heart, ShoppingCart, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Prenda {
  id: number
  nombre: string

  descripcion: string
  precio: number
  imagen: string
  colores: string[] // Propiedad para los colores disponibles
}

const prendas: Prenda[] = [
  { id: 1, nombre: "SET FALDA + CROPTOP", descripcion: "Dúos", precio: 45000.00, imagen: "/images/Img1.jpeg", colores: ["Rojo", "Azul", "Negro"] },
  { id: 2, nombre:  "SET PANTALONETA + TOP MANGA", descripcion: "Dúos", precio: 40000.00, imagen: "/images/Img14.jpg", colores: ["Verde", "Negro"] },
  { id: 3, nombre:  "DÚO KMI", descripcion: "", precio: 40000.00, imagen: "/images/Img3.jpg", colores: ["Amarillo", "Rojo", "Negro"] },
  { id: 4, nombre: "SET SHORT + TOP MARIPOSA", descripcion: "Dúos", precio: 45000.00, imagen: "/images/Img4.jpg", colores: ["Azul", "Negro"] },
  { id: 5, nombre: "SET PETO + LEGG", descripcion: "Dúos", precio: 50000.00, imagen: "/images/Img5.jpeg", colores: ["Blanco", "Negro"] },
  { id: 6, nombre: "DUO RECOGIDO REEB", descripcion: "Dúos", precio: 50000.00, imagen: "/images/Img6.jpg", colores: ["Rojo", "Negro"] },
  { id: 7, nombre: "SET TOP CHOMPA + LEGG", descripcion: "Dúos", precio: 50000.00, imagen: "/images/Img7.jpg", colores: ["Azul", "Blanco"] },
  { id: 8, nombre: "SET CAPRI & BUZO CORTO", descripcion: "Dúos", precio: 50000.00, imagen: "/images/Img8.jpg", colores: ["Gris", "Negro"] },
  { id: 9, nombre: "SET TIPO POLO + CAPRI", descripcion: "Dúos", precio: 45000.00, imagen: "/images/Img9.jpg", colores: ["Verde", "Negro"] },
  { id: 10, nombre: "SET", descripcion: "", precio: 0.00, imagen: "/images/Img10.jpg", colores: ["Rojo", "Azul"] },
  { id: 11, nombre: "SET", descripcion: "", precio: 0.00, imagen: "/images/Img11.jpg", colores: ["Blanco"] },
  { id: 12, nombre: "SET SUDADERA + CHAQUETA CHOMPA", descripcion: "", precio: 60000.00, imagen: "/images/Img12.jpg", colores: ["Negro", "Gris"] },
  { id: 13, nombre: "SET CHAQUETA TEX + SHORT", descripcion: "Dúos", precio: 40000.00, imagen: "/images/Img13.jpg", colores: ["Naranja", "Negro"] },
  { id: 14, nombre: "SET SHORT PUSH + TOP PUNTA", descripcion: "Dúos", precio: 45000.00, imagen: "/images/Img2.jpg", colores: ["Verde", "Negro"] },
  { id: 15, nombre: "SET SHORT + TOP MARIPOSA", descripcion: "Dúos", precio: 45000.00, imagen: "/images/Img15.jpg", colores: ["Rojo", "Negro"] },
  { id: 16, nombre: "ENTERIZOS", descripcion: "Enterizos", precio: 45000.00, imagen: "/images/Img16.jpg", colores: ["Rojo", "Negro", "Azul"] },
  { id: 17, nombre: "ENTERIZO TIRA", descripcion: "Enterizos", precio: 50000.00, imagen: "/images/Img17.jpg", colores: ["Blanco", "Azul"] },
  { id: 18, nombre: "ENTERIZO SIZA", descripcion: "Enterizos", precio: 45000.00, imagen: "/images/Img18.jpg", colores: ["Amarillo", "Negro"] },
  { id: 19, nombre: "ENTERIZO RECOGIDO", descripcion: "Enterizos", precio: 45000.00, imagen: "/images/Img19.jpg", colores: ["Rojo", "Negro"] },
  { id: 20, nombre: "ENTERIZO PUSH", descripcion: "Enterizos", precio: 50000.00, imagen: "/images/Img20.jpg", colores: ["Verde", "Negro"] }
]

export default function CatalogoRopa() {
  const [favoritos, setFavoritos] = useState<number[]>([])
  const [prendaSeleccionada, setPrendaSeleccionada] = useState<Prenda | null>(null)

  const toggleFavorito = (id: number) => {
    setFavoritos(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    )
  }

  const enviarPedidoWhatsApp = (prenda: Prenda) => {
    const mensaje = `Hola, me gustaría hacer un pedido de ${prenda.nombre}. Precio: $${prenda.precio}`
    const url = `https://wa.me/3176961102?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Catálogo de Ropa</h1>
      
      <Tabs defaultValue="catalogo" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="catalogo">Catálogo</TabsTrigger>
          <TabsTrigger value="favoritos">Favoritos</TabsTrigger>
        </TabsList>
        <TabsContent value="catalogo">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {prendas.map(prenda => (
              <Card key={prenda.id} className="flex flex-col justify-between">
                <CardHeader>
                  <img 
                    src={prenda.imagen} 
                    alt={prenda.nombre} 
                    className="w-full h-auto max-h-[1280px] object-contain mb-4" 
                  />
                  <CardTitle>{prenda.nombre}</CardTitle>
                  <CardDescription>{prenda.descripcion}</CardDescription>

                  {/* Mostrar los colores disponibles en la card */}
                  <div className="flex mt-2">
                    {prenda.colores.map((color, index) => (
                      <div 
                        key={index} 
                        title={color} 
                        className="w-6 h-6 rounded-full mr-2"
                        style={{ backgroundColor: color.toLowerCase() }}
                      />
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-2xl font-bold">${prenda.precio.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => toggleFavorito(prenda.id)}>
                    <Heart className={`mr-2 h-4 w-4 ${favoritos.includes(prenda.id) ? 'fill-red-500' : ''}`} />
                    {favoritos.includes(prenda.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                  </Button>
                  <Button onClick={() => setPrendaSeleccionada(prenda)}>Ver detalles</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="favoritos">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {prendas.filter(prenda => favoritos.includes(prenda.id)).map(prenda => (
              <Card key={prenda.id} className="flex flex-col justify-between">
                <CardHeader>
                  <img src={prenda.imagen} alt={prenda.nombre} className="w-full h-48 object-cover mb-4" />
                  <CardTitle>{prenda.nombre}</CardTitle>
                  <CardDescription>{prenda.descripcion}</CardDescription>

                  {/* Mostrar los colores disponibles en los favoritos */}
                  <div className="flex mt-2">
                    {prenda.colores.map((color, index) => (
                      <div 
                        key={index} 
                        title={color} 
                        className="w-6 h-6 rounded-full mr-2"
                        style={{ backgroundColor: color.toLowerCase() }}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">${prenda.precio.toFixed(2)}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => toggleFavorito(prenda.id)}>
                    <Heart className="mr-2 h-4 w-4 fill-red-500" />
                    Quitar de favoritos
                  </Button>
                  <Button onClick={() => setPrendaSeleccionada(prenda)}>Ver detalles</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {prendaSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{prendaSeleccionada.nombre}</CardTitle>
                <Button variant="ghost" onClick={() => setPrendaSeleccionada(null)}>
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Volver
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row">
                <img 
                  src={prendaSeleccionada.imagen} 
                  alt={prendaSeleccionada.nombre} 
                  className="w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0 md:mr-4" 
                />
                <div>
                  <p className="text-lg mb-4">{prendaSeleccionada.descripcion}</p>
                  <p className="text-3xl font-bold mb-4">${prendaSeleccionada.precio.toFixed(2)}</p>

                  {/* Mostrar los colores disponibles en los detalles */}
                  <div className="flex mb-4">
                    <p className="mr-2">Colores disponibles:</p>
                    {prendaSeleccionada.colores.map((color, index) => (
                      <div 
                        key={index} 
                        title={color} 
                        className="w-6 h-6 rounded-full mr-2"
                        style={{ backgroundColor: color.toLowerCase() }}
                      />
                    ))}
                  </div>

                  <Button onClick={() => enviarPedidoWhatsApp(prendaSeleccionada)} className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Hacer pedido por WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
