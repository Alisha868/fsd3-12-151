import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { readFile, writeFile } from "fs/promises";

const File = "products.json";
const rl = readline.createInterface({ input, output });



const getProducts = async () => {
  try {
    const data = await readFile(File, "utf-8");
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

const viewProduct = async () => {
  //show data in table form
  
  const products = await getProducts();
  if (products.length === 0) {
    console.log("No products found.");
    return;
  }
  console.table(products);
  const total = products.reduce((sum, product) => sum + (product.price * product.qty), 0);
  console.log(`Total value: $${total}`);
};

const addProduct = async () => {
  const name = await rl.question("Enter product name: ");
  const price = await rl.question("Enter product price: ");
  const id = Math.floor(Math.random() * 1000);
  const qty = await rl.question("Enter product quantity: ");

 
  const products = await getProducts();

  products.push({ id, name, price, qty });
  await writeFile(File, JSON.stringify(products, null, 2));
  console.log("Product added successfully.");
};

const updateProduct = async () => {
  const name = await rl.question("Enter product name to update: ");
  const products = await getProducts();
  const productIndex = products.findIndex((product) => product.name === name);
  if (productIndex === -1) {
    console.log("Product not found.");
    return;
  }
  const price = await rl.question("Enter new product price: ");
  const qty = await rl.question("Enter new product quantity: ");
  products[productIndex].price = price;
  products[productIndex].qty = qty;
  await writeFile(File, JSON.stringify(products, null, 2));
  console.log("Product updated successfully.");
};


const deleteProduct = async () => {
  const name = await rl.question("Enter product name to delete: ");
  const products = await getProducts();
  const productIndex = products.findIndex((product) => product.name === name);
  if (productIndex === -1) {
    console.log("Product not found.");
    return;
  }
  products.splice(productIndex, 1);
  await writeFile(File, JSON.stringify(products, null, 2));
  console.log("Product deleted successfully.");
};

const checkout = async () => {
  const products = await getProducts();
  if (products.length === 0) {
    console.log("No products found.");
    return;
  }

  const total = products.reduce(
    (sum, product) => sum + Number(product.price) * Number(product.qty),
    0,
  );
  console.log(`Checkout total: $${total.toFixed(2)}`);
};

const main = async () => {
  console.log("WELCOME TO FLIPKART😂");

  let choice;
  while (Number(choice) !== 5) {
    console.log(
      "\n1. Add Product\n2. View Product\n3. Update Product\n4. Delete Product\n5. Checkout",
    );
    
    choice = await rl.question("Enter your choice: ");

    switch (Number(choice)) {
      case 1:
        await addProduct();
        break;
      case 2:
        await viewProduct();
        break;
      case 3:
        await updateProduct();
        break;
      case 4:
        await deleteProduct();
        break;
      case 5:
        await checkout();
        console.log("Exiting the program.");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }
  }
};

await main();
// import readline from "readline/promises";
// import { stdin, stdout } from "process";
// import { readFile, writeFile } from "fs/promises";

// const FILE = "product.json";

// const getCart = async () => {
//   const data = await readFile(FILE, "utf-8");
//   return JSON.parse(data);
// };

// const saveCart = async (myCart) => {
//   await writeFile(FILE, JSON.stringify(myCart, null, 2));
// };

// const addToCart = async (product) => {
//   const myCart = await getCart();
//   const isFound = myCart.find((item) => item.id === product.id);
//   if (isFound) {
//     isFound.qty += product.qty;
//   } else {
//     myCart.push(product);
//   }
//   await saveCart(myCart);
//   console.log(`product added/updated with id ${product.id} into cart`);
// };

// const showCart = async () => {
//   const data = await getCart();
//   console.table(data);
// };

// const main = async () => {
//   let choice;
//   const cin = readline.createInterface({ input: stdin, output: stdout });
//   do {
//     console.log("Welcome to Flipkart 🤸");
//     console.log("1.......... Show cart");
//     console.log("2.......... Add Product");
//     console.log("3.......... Remove Product");
//     console.log("4.......... Update Quantity");
//     console.log("5.......... Checkout");
//     choice = await cin.question("Enter your choice:");
//     switch (Number(choice)) {
//       case 1:
//         await showCart();
//         break;
//       case 2:
//         let data = await cin.question("Enter id,name,price,qty:");
//         const [id, name, price, qty] = data
//           .split(",")
//           .map((item) => item.trim());
//         const product = {
//           id: Number(id),
//           name,
//           price: Number(price),
//           qty: Number(qty),
//         };
//         await addToCart(product);

//         break;
//       case 3:
//         console.log("remove product");
//         break;
//       case 4:
//         console.log("Update product quantity");
//         break;
//       case 5:
//         console.log("See you later");
//         break;
//       default:
//         console.log("Invalid choice! try again 🛑");
//     }
//   } while (choice != 5);
//   cin.close();
// };

// main();