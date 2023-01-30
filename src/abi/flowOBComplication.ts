export const FlowOBComplicationABI = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'currency', type: 'address' }],
    name: 'CurrencyAdded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'currency', type: 'address' }],
    name: 'CurrencyRemoved',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'bool', name: 'oldVal', type: 'bool' },
      { indexed: false, internalType: 'bool', name: 'newVal', type: 'bool' }
    ],
    name: 'TrustedExecutionChanged',
    type: 'event'
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'ORDER_HASH',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'ORDER_ITEM_HASH',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'PRECISION',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'TOKEN_INFO_HASH',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'WETH',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '_currency', type: 'address' }],
    name: 'addCurrency',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'sell',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'buy',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'address', name: 'collection', type: 'address' },
          {
            components: [
              { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
            ],
            internalType: 'struct OrderTypes.TokenInfo[]',
            name: 'tokens',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct OrderTypes.OrderItem[]',
        name: 'constructedNfts',
        type: 'tuple[]'
      }
    ],
    name: 'areNumMatchItemsValid',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'makerOrder',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'address', name: 'collection', type: 'address' },
          {
            components: [
              { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
            ],
            internalType: 'struct OrderTypes.TokenInfo[]',
            name: 'tokens',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct OrderTypes.OrderItem[]',
        name: 'takerItems',
        type: 'tuple[]'
      }
    ],
    name: 'areNumTakerItemsValid',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'makerOrder',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder[]',
        name: 'manyMakerOrders',
        type: 'tuple[]'
      }
    ],
    name: 'canExecMatchOneToMany',
    outputs: [
      { internalType: 'bool', name: '', type: 'bool' },
      { internalType: 'bytes32', name: '', type: 'bytes32' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'makerOrder1',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'makerOrder2',
        type: 'tuple'
      }
    ],
    name: 'canExecMatchOneToOne',
    outputs: [
      { internalType: 'bool', name: '', type: 'bool' },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'sell',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'buy',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'address', name: 'collection', type: 'address' },
          {
            components: [
              { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
            ],
            internalType: 'struct OrderTypes.TokenInfo[]',
            name: 'tokens',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct OrderTypes.OrderItem[]',
        name: 'constructedNfts',
        type: 'tuple[]'
      }
    ],
    name: 'canExecMatchOrder',
    outputs: [
      { internalType: 'bool', name: '', type: 'bool' },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'makerOrder',
        type: 'tuple'
      }
    ],
    name: 'canExecTakeOneOrder',
    outputs: [
      { internalType: 'bool', name: '', type: 'bool' },
      { internalType: 'bytes32', name: '', type: 'bytes32' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'makerOrder',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'address', name: 'collection', type: 'address' },
          {
            components: [
              { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
            ],
            internalType: 'struct OrderTypes.TokenInfo[]',
            name: 'tokens',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct OrderTypes.OrderItem[]',
        name: 'takerItems',
        type: 'tuple[]'
      }
    ],
    name: 'canExecTakeOrder',
    outputs: [
      { internalType: 'bool', name: '', type: 'bool' },
      { internalType: 'bytes32', name: '', type: 'bytes32' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'collection', type: 'address' },
          {
            components: [
              { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
            ],
            internalType: 'struct OrderTypes.TokenInfo[]',
            name: 'tokens',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct OrderTypes.OrderItem[]',
        name: 'order1Nfts',
        type: 'tuple[]'
      },
      {
        components: [
          { internalType: 'address', name: 'collection', type: 'address' },
          {
            components: [
              { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
            ],
            internalType: 'struct OrderTypes.TokenInfo[]',
            name: 'tokens',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct OrderTypes.OrderItem[]',
        name: 'order2Nfts',
        type: 'tuple[]'
      }
    ],
    name: 'doItemsIntersect',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'collection', type: 'address' },
          {
            components: [
              { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
            ],
            internalType: 'struct OrderTypes.TokenInfo[]',
            name: 'tokens',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct OrderTypes.OrderItem',
        name: 'item1',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'address', name: 'collection', type: 'address' },
          {
            components: [
              { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
            ],
            internalType: 'struct OrderTypes.TokenInfo[]',
            name: 'tokens',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct OrderTypes.OrderItem',
        name: 'item2',
        type: 'tuple'
      }
    ],
    name: 'doTokenIdsIntersect',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
    name: 'getCurrencyAt',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'order',
        type: 'tuple'
      },
      { internalType: 'bytes32', name: 'orderHash', type: 'bytes32' }
    ],
    name: 'isOrderValid',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'sell',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'buy',
        type: 'tuple'
      }
    ],
    name: 'isPriceValid',
    outputs: [
      { internalType: 'bool', name: '', type: 'bool' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'sell',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'buy',
        type: 'tuple'
      }
    ],
    name: 'isTimeValid',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'currency', type: 'address' }],
    name: 'isValidCurrency',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'numCurrencies',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '_currency', type: 'address' }],
    name: 'removeCurrency',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [{ internalType: 'bool', name: 'newVal', type: 'bool' }],
    name: 'setTrustedExecStatus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'trustedExecEnabled',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'makerOrder',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder[]',
        name: 'manyMakerOrders',
        type: 'tuple[]'
      }
    ],
    name: 'verifyCanExecMatchOneToMany',
    outputs: [
      { internalType: 'bool', name: '', type: 'bool' },
      { internalType: 'bytes32', name: '', type: 'bytes32' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'makerOrder1',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'makerOrder2',
        type: 'tuple'
      }
    ],
    name: 'verifyCanExecMatchOneToOne',
    outputs: [
      { internalType: 'bool', name: '', type: 'bool' },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'sell',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'buy',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'address', name: 'collection', type: 'address' },
          {
            components: [
              { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
              { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
            ],
            internalType: 'struct OrderTypes.TokenInfo[]',
            name: 'tokens',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct OrderTypes.OrderItem[]',
        name: 'constructedNfts',
        type: 'tuple[]'
      }
    ],
    name: 'verifyCanExecMatchOrder',
    outputs: [
      { internalType: 'bool', name: '', type: 'bool' },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
      { internalType: 'uint256', name: '', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bool', name: 'verifySellOrder', type: 'bool' },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'sell',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'buy',
        type: 'tuple'
      }
    ],
    name: 'verifyMatchOneToManyOrders',
    outputs: [
      { internalType: 'bool', name: '', type: 'bool' },
      { internalType: 'bytes32', name: '', type: 'bytes32' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'sellOrderHash', type: 'bytes32' },
      { internalType: 'bytes32', name: 'buyOrderHash', type: 'bytes32' },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'sell',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'buy',
        type: 'tuple'
      }
    ],
    name: 'verifyMatchOneToOneOrders',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'sellOrderHash', type: 'bytes32' },
      { internalType: 'bytes32', name: 'buyOrderHash', type: 'bytes32' },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'sell',
        type: 'tuple'
      },
      {
        components: [
          { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
          { internalType: 'address', name: 'signer', type: 'address' },
          { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[]',
            name: 'nfts',
            type: 'tuple[]'
          },
          { internalType: 'address[]', name: 'execParams', type: 'address[]' },
          { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
          { internalType: 'bytes', name: 'sig', type: 'bytes' }
        ],
        internalType: 'struct OrderTypes.MakerOrder',
        name: 'buy',
        type: 'tuple'
      }
    ],
    name: 'verifyMatchOrders',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  }
];
