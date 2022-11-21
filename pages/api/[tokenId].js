export default function handler(req, res) {
  const tokenId = req.query.tokenId;
  const image_url =
    "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/";

  res.status(200).join({
    name: "Crypto Dev #" + tokenId,
    description: "Crypto DDev is a collection of developers in crypto 🐡",
    image: image_url + tokenId + ".svg",
  });
}
