import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "../types/types";



const ProductGrid: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-5 font-montserrat">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="h-full"
        >
          <Card className="h-96">
            <CardMedia
              component="img"
              alt={product.title || ""}
              image={product.images[0]}
              className="h-1/2 w-full object-cover object-center"
            />
            <CardContent className="mt-5">
              <Typography
                variant="h5"
                component="div"
                style={{ fontSize: "18px", fontWeight: 'bold', color: 'hsla(228, 28%, 20%, 1)'}}
                >
                 {product.title}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                style={{ fontSize: "16px", fontWeight: 'normal', color: 'hsla(228, 28%, 20%, 1)', marginTop: '8px'}}
              >
                {product.category}
              </Typography>
              <div className="flex gap-2 justify-center mt-2 font-bold text-base">
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{color: 'hsla(0,0%,74%,1)', fontSize: '16px'}}
                >
                  ${product.price}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{color: 'hsla(165,58%,33%,1)', fontSize: '18px'}}
                >
                  ${product.discountPercentage}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
