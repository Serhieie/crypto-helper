import { calculateProfitPercentage } from "../../calculateProfitPercentage";
import type { CommonAsset } from "../../../redux/crypto/Cryptocurency.types";
import { GetAllCryptoResponse } from "../../../redux/crypto/cryptoApi";

export const refetchCrypto = (
  stateAssets: CommonAsset[] | undefined,
  cryptoData: GetAllCryptoResponse | undefined
): CommonAsset[] => {
  if (!stateAssets || !cryptoData) {
    return stateAssets || [];
  }
  return stateAssets.map((asset) => {
    const matchingCrypto = cryptoData.result.find(
      (crypto) => crypto.id === asset.assetId
    );

    if (matchingCrypto) {
      const growPercent = calculateProfitPercentage(
        asset.price / asset.amount,
        matchingCrypto.price
      );
      return {
        ...asset,
        grow: matchingCrypto.price > asset.price,
        growPercent,
        totalAmount: asset.amount * matchingCrypto.price,
        totalProfit: asset.amount * matchingCrypto.price - asset.price,
      };
    }
    return asset;
  });
};
