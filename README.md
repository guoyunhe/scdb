# scdb

generic software compatibility database

## API

### System

#### System list

```
GET /systems
```

```json
[
  {
    "id": 1,
    "code": "linux_x86",
    "name": "Linux (x86)"
  },
  {
    "id": 2,
    "code": "linux_arm64",
    "name": "Linux (ARM64)"
  },
  {
    "id": 3,
    "code": "android",
    "name": "Android"
  }
]
```

#### System detail

```
GET /systems/1
```

```json
{
  "id": 1,
  "code": "linux_x86",
  "name": "Linux (x86)"
}
```

### Engine

#### Engine list

```
GET /engines/:id
```

```json
[
  {
    "id": 1,
    "code": "puppy_emu",
    "name": "Puppy Emu"
  },
  {
    "id": 2,
    "code": "bunny_box",
    "name": "Bunny Box"
  }
]
```

#### Engine detail

```
GET /engines/1
```

```json
{
  "id": 1,
  "code": "puppy_emu",
  "name": "Puppy Emu",
  "platforms": [
    {
      "id": 1,
      "code": "linux_x86",
      "name": "Linux (x86)"
    },
    {
      "id": 2,
      "code": "linux_arm64",
      "name": "Linux (ARM64)"
    },
    {
      "id": 3,
      "code": "android",
      "name": "Android"
    }
  ]
}
```

### Content

```http
GET /api/v1/<platform>/<software>/<content>
```

```
GET /api/v1/linux/easy-emu/SCP12332
```

```json
{
  // 0 - not tested
  // 1 - cannot enter the content
  // 2 - can enter the content but not able to finish
  // 3 - can finish the content with crashes, slowness, gliches and other bad experiences
  // 4 - can finish the content smoothly with some extra configuration, tweeking or patching
  // 5 - can finish the content smoothly without extra efforts
  "rating": 1,
  // how many reviews the overall rating is based on
  "reviewCount": 124
}
```
