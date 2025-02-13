import { Networks } from "./blockchain";

interface IChainAddresses {
    [key: string]: string;
}

const AVAX_MAINNET: IChainAddresses = {
    DAO_ADDRESS: "0x78a9e536EBdA08b5b9EDbE5785C9D1D50fA3278C",
    MEMO_ADDRESS: "0x136Acd46C134E8269052c62A67042D6bDeDde3C9",
    TIME_ADDRESS: "0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
    MIM_ADDRESS: "0x130966628846BFd36ff31a822705796e8cb8C18D",
    SPELL_ADDRESS: "0xCE1bFFBD5374Dac86a2893119683F4911a2F7814",
    STAKING_ADDRESS: "0x4456B87Af11e87E329AB7d7C7A246ed1aC2168B9",
    STAKING_HELPER_ADDRESS: "0x096BBfB78311227b805c968b070a81D358c13379",
    TIME_BONDING_CALC_ADDRESS: "0x819323613AbC79016f9D2443a65E9811545382a5",
    TREASURY_ADDRESS: "0x1c46450211CB2646cc1DA3c5242422967eD9e04c",
    ZAPIN_ADDRESS: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
    ZAPIN_LP_ADDRESS: "0x8308a1A404dB3cB3075618B1651671bC4E15F9d5",
    WMEMO_ADDRESS: "0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b",
    ANYSWAP_ADDRESS: "0xe5CF1558A1470cb5C166c2e8651eD0F3c5fb8F42",
    ANY_WMEMO_ADDRESS: "0x4551fa2b6625d06179d30C30EEDdDC05C46D3F20",
    BSGG_MIM_LP: "0xb599E3Cc5e7730865E74d78F2b9B67fDC627b743",
    FARM_ADDRESS: "0xC172c84587bEa6d593269bFE08632bf2Da2Bc0f6",
    REDEMPTION_ADDRESS: "0x238c161bEd700b84aBa73526Be2b3120b2Cb0e48",
};

const FTM_MAINNET: IChainAddresses = {
    WMEMO_ADDRESS: "0xDDc0385169797937066bBd8EF409b5B3c0dFEB52",
    ANYSWAP_ADDRESS: "0xb576c9403f39829565bd6051695e2ac7ecf850e2",
    TREASURY_ADDRESS: "0xD7768472132A41AA8Ba74D0dd0f7E0D55B09ad4c",
    BSGG_ADDRESS: "0x5a33869045db8a6a16c9f351293501cfd92cf7ed",
};

const ETH_MAINNET: IChainAddresses = {
    WMEMO_ADDRESS: "0x3b79a28264fC52c7b4CEA90558AA0B162f7Faf57",
    ANYSWAP_ADDRESS: "0x765277EebeCA2e31912C9946eAe1021199B39C61",
    TREASURY_ADDRESS: "0x6aa7752519C70B3bE87B3c17F913A4145119C9Ef",
};

const AETH_MAINNET: IChainAddresses = {
    WMEMO_ADDRESS: "0xecf2adaff1de8a512f6e8bfe67a2c836edb25da3",
    ANYSWAP_ADDRESS: "0x0caE51e1032e8461f4806e26332c030E34De3aDb",
    TREASURY_ADDRESS: "0xD7768472132A41AA8Ba74D0dd0f7E0D55B09ad4c",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;
    if (networkID === Networks.FANTOM) return FTM_MAINNET;
    if (networkID === Networks.ETH) return ETH_MAINNET;
    if (networkID === Networks.AETH) return AETH_MAINNET;

    throw Error("Network don't support");
};

export const ADRESSES_LIST = [
    "0x1c46450211cb2646cc1da3c5242422967ed9e04c",
    "0x355d72fb52ad4591b2066e43e89a7a38cf5cb341",
    "0x78a9e536ebda08b5b9edbe5785c9d1d50fa3278c",
    "0xb6b80f4ea8fb4117928d3c819e8ac6f1a3837baf",
];

export const DEAD_ADDRESS = "0x000000000000000000000000000000000000dEaD";
