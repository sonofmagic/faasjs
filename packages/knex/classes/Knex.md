# Class: Knex

Knex 插件

## Implements

- `Plugin`

## Table of contents

### Constructors

- [constructor](Knex.md#constructor)

### Properties

- [adapter](Knex.md#adapter)
- [config](Knex.md#config)
- [logger](Knex.md#logger)
- [name](Knex.md#name)
- [query](Knex.md#query)
- [type](Knex.md#type)

### Methods

- [onDeploy](Knex.md#ondeploy)
- [onMount](Knex.md#onmount)
- [quit](Knex.md#quit)
- [raw](Knex.md#raw)
- [schema](Knex.md#schema)
- [transaction](Knex.md#transaction)

## Constructors

### constructor

• **new Knex**(`config?`)

创建插件实例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`KnexConfig`](../modules.md#knexconfig) | 配置 |

## Properties

### adapter

• **adapter**: `Knex`<`any`, `Record`<`string`, `any`\>[]\>

___

### config

• **config**: `Config`<`any`\>

___

### logger

• **logger**: `Logger`

___

### name

• `Readonly` **name**: `string` = `Name`

#### Implementation of

Plugin.name

___

### query

• **query**: `Knex`<`any`, `Record`<`string`, `any`\>[]\>

___

### type

• `Readonly` **type**: `string` = `Name`

#### Implementation of

Plugin.type

## Methods

### onDeploy

▸ **onDeploy**(`data`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `DeployData` |
| `next` | `Next` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Plugin.onDeploy

___

### onMount

▸ **onMount**(`data`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `MountData` |
| `next` | `Next` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Plugin.onMount

___

### quit

▸ **quit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

___

### raw

▸ **raw**<`TResult`\>(`sql`, `bindings?`): `Promise`<`Raw`<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sql` | `string` | `undefined` |
| `bindings` | `RawBinding`[] \| `ValueDict` | `[]` |

#### Returns

`Promise`<`Raw`<`TResult`\>\>

___

### schema

▸ **schema**(): `SchemaBuilder`

#### Returns

`SchemaBuilder`

___

### transaction

▸ **transaction**<`TResult`\>(`scope`, `config?`): `Promise`<`TResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | (`trx`: `Transaction`<`any`, `any`\>) => `void` \| `Promise`<`TResult`\> |
| `config?` | `any` |

#### Returns

`Promise`<`TResult`\>