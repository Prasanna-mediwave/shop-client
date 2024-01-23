import React from "react";

interface ShopCardProps {
  userData: any;
}

export const ShopCard: React.FC<ShopCardProps> = ({ userData }) => {
  return (
    <div className="grid gap-y-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {userData.map((data: any, idx: any) => {
        return (
          <div
            className="bg-secondary w-80 mx-auto rounded-2xl flex flex-col justify-between"
            key={idx}
          >
            <div className="p-5">
              <div>
                <p>
                  Product name :
                  <span className="text-primary pl-3">{data.productName}</span>
                </p>
              </div>
              <div>
                <p>
                  Product description :
                  <span className="text-primary pl-3">
                    {data.productDescription}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Price :<span className="text-primary pl-3">{data.price}</span>
                </p>
              </div>
              <div>
                <p>
                  Customer rating :
                  <span className="text-primary pl-3">{data.rating}</span>
                </p>
              </div>
            </div>
            <div
              className="p-5 bg-primary m-5 rounded-full text-center transition ease-in-out delay-150
              hover:-translate-y-1 hover:scale-105 hover:bg-primary/80
              duration-200 "
            >
              <button type="button" className="text-secondary">
                Add to card
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
