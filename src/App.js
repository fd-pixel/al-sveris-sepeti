import "./App.css";
import Card from "./components/card/Card";
import { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

function App() {
  const initialState = [
    {
      id: "rec1JZlfCIBOPdcT2",
      title: "Samsung Galaxy S8",
      price: 399.99,
      image:
        "https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png",
      amount: 0,
      info: "sds",
    },
    {
      id: "recB6qcHPxb62YJ75",
      title: "Google Pixel",
      price: 499.99,
      image:
        "https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png",
      amount: 0,
      info: "sds",
    },
    {
      id: "recdRxBsE14Rr2VuJ",
      title: "Xiaomi Redmi Note 2",
      price: 699.99,
      image:
        "https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png",
      amount: 0,
      info: "sds",
    },
    {
      id: "recwTo160XST3PIoW",
      title: "Samsung Galaxy S7",
      price: 299.99,
      image:
        "https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png",
      amount: 0,
      info: "sds",
    },
  ];
  const [products, setProducts] = useState(initialState);
  const [basket, setBasket] = useState([]);
  const [toplamTutar, setToplamTutar] = useState(0);
  const array = [...basket];
  return (
    <div className="App">
      <h1>React Sepet Uygulaması</h1>
      <h2>Ürünler</h2>
      <div className="products">
        {products.map((product, id) => {
          return (
            <div key={id}>
              <Card
                title={product.title}
                image={product.image}
                price={product.price}
              ></Card>
              <div className="signs">
                <FaPlusSquare
                  style={{ fontSize: "20px" }}
                  onClick={() => {
                    if (
                      array.findIndex((ind) => {
                        return product.id === ind.id;
                      }) === -1
                    ) {
                      array.push(product);
                      setBasket(array);
                      product.amount += 1;
                      setToplamTutar(
                        array.reduce(
                          (toplamTutar, product) =>
                            (toplamTutar += product.amount * product.price),
                          0
                        )
                      );
                    } else {
                      array.map((item) => {
                        if (item.id === product.id) {
                          return (product.amount += 1);
                        }
                        setBasket(array);
                        setToplamTutar(
                          array.reduce(
                            (toplamTutar, product) =>
                              (toplamTutar += product.amount * product.price),
                            0
                          )
                        );
                      });
                    }
                  }}
                />
                {product.amount}
                <FaMinusSquare
                  style={{ fontSize: "20px" }}
                  onClick={() => {
                    array.map((item, index) => {
                      if (item.id === product.id) {
                        if (product.amount > 0) return (product.amount -= 1);
                      }
                      setBasket(array);
                      setToplamTutar(
                        array.reduce(
                          (toplamTutar, product) =>
                            (toplamTutar += product.amount * product.price),
                          0
                        )
                      );
                    });
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="basket">
        <h2> Sepetiniz</h2>
        <ul className="Sepet">
          {basket.map((product, index) => {
            return (
              <li key={index} className="basket-items">
                {product.title +
                  "  " +
                  "----> " +
                  product.amount +
                  "  " +
                  "Adet:" +
                  "Toplam Tutar" +
                  " " +
                  "$" +
                  " " +
                  (product.amount * product.price).toFixed(2)}
              </li>
            );
          })}
        </ul>

        <h2>Toplam Tutar</h2>
        <p className="toplam-tutar">{toplamTutar.toFixed(2)}</p>
        {basket.length > 0 ? (
          <button
            className="delete-btn"
            onClick={() => {
              // product.amount === 0
              setBasket([]);
              setToplamTutar(0);
            }}
          >
            Sepeti Temizle{" "}
          </button>
        ) : (
          <h2>Sepetinizde Ürün Bulunmamaktadır</h2>
        )}
      </div>
    </div>
  );
}

export default App;
