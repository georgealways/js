<a name="module_@georgealways/js"></a>

## @georgealways/js

* [@georgealways/js](#module_@georgealways/js)
    * [~Random](#module_@georgealways/js..Random)
        * [.value()](#module_@georgealways/js..Random+value) ⇒ <code>number</code>
        * [.range(min, max)](#module_@georgealways/js..Random+range) ⇒ <code>number</code>
        * [.int(min, max)](#module_@georgealways/js..Random+int) ⇒ <code>number</code>
        * [.pick(arr)](#module_@georgealways/js..Random+pick) ⇒ <code>\*</code>
        * [.chance([percent])](#module_@georgealways/js..Random+chance) ⇒ <code>boolean</code>
        * [.sign([percent])](#module_@georgealways/js..Random+sign) ⇒ <code>number</code>
        * [.shuffle(arr, [start], [stop])](#module_@georgealways/js..Random+shuffle)
    * [~SeededRandom](#module_@georgealways/js..SeededRandom) ⇐ <code>Random</code>
        * [new SeededRandom([seed])](#new_module_@georgealways/js..SeededRandom_new)
        * [.seed([seed])](#module_@georgealways/js..SeededRandom+seed)
    * [~Noise](#module_@georgealways/js..Noise)
        * [new Noise(seed)](#new_module_@georgealways/js..Noise_new)
        * [.octaves](#module_@georgealways/js..Noise+octaves)
        * [.persistence](#module_@georgealways/js..Noise+persistence)
        * [.lacunarity](#module_@georgealways/js..Noise+lacunarity)
        * [.seed(seed)](#module_@georgealways/js..Noise+seed)
        * [.perlin(x, [y], [z])](#module_@georgealways/js..Noise+perlin) ⇒ <code>number</code>
        * [.simplex(x, [y], [z])](#module_@georgealways/js..Noise+simplex) ⇒ <code>number</code>
        * [.perlin1(x)](#module_@georgealways/js..Noise+perlin1) ⇒ <code>number</code>
        * [.perlin2(x, y)](#module_@georgealways/js..Noise+perlin2) ⇒ <code>number</code>
        * [.perlin3(x, y, z)](#module_@georgealways/js..Noise+perlin3) ⇒ <code>number</code>
        * [.simplex1(x)](#module_@georgealways/js..Noise+simplex1) ⇒ <code>number</code>
        * [.simplex2(x, y)](#module_@georgealways/js..Noise+simplex2) ⇒ <code>number</code>
        * [.simplex3(x, y, z)](#module_@georgealways/js..Noise+simplex3) ⇒ <code>number</code>
    * [~URL](#module_@georgealways/js..URL)
        * [.hash](#module_@georgealways/js..URL+hash)
        * [.strings](#module_@georgealways/js..URL+strings)
        * [.boolean(name, [defaultValue])](#module_@georgealways/js..URL+boolean) ⇒ <code>boolean</code>
        * [.number(name, [defaultValue])](#module_@georgealways/js..URL+number) ⇒ <code>number</code>
    * [~Shuffler](#module_@georgealways/js..Shuffler)
        * [new Shuffler(arr, rng)](#new_module_@georgealways/js..Shuffler_new)
        * [.next()](#module_@georgealways/js..Shuffler+next) ⇒ <code>\*</code>
    * [~is](#module_@georgealways/js..is)
        * [.string(v)](#module_@georgealways/js..is.string) ⇒ <code>boolean</code>
        * [.function(v)](#module_@georgealways/js..is.function) ⇒ <code>boolean</code>
        * [.number(v)](#module_@georgealways/js..is.number) ⇒ <code>boolean</code>
        * [.array(v)](#module_@georgealways/js..is.array) ⇒ <code>boolean</code>
        * [.object(v)](#module_@georgealways/js..is.object) ⇒ <code>boolean</code>
        * [.boolean(v)](#module_@georgealways/js..is.boolean) ⇒ <code>boolean</code>
    * [~random](#module_@georgealways/js..random)
    * [~seededRandom](#module_@georgealways/js..seededRandom)
    * [~noise](#module_@georgealways/js..noise)
    * [~url](#module_@georgealways/js..url)
    * [~map(t, a, b, c, d)](#module_@georgealways/js..map) ⇒ <code>number</code>
    * [~lerp(a, b, t)](#module_@georgealways/js..lerp) ⇒ <code>number</code>
    * [~normalize(a, b, v)](#module_@georgealways/js..normalize) ⇒ <code>number</code>
    * [~cmap(t, a, b, c, d)](#module_@georgealways/js..cmap) ⇒ <code>number</code>
    * [~clerp(a, b, t)](#module_@georgealways/js..clerp) ⇒ <code>number</code>
    * [~cnormalize(a, b, v)](#module_@georgealways/js..cnormalize) ⇒ <code>number</code>
    * [~clamp(v, a, b)](#module_@georgealways/js..clamp) ⇒ <code>number</code>
    * [~clamp01(v)](#module_@georgealways/js..clamp01) ⇒ <code>number</code>
    * [~dist(a, b, c, d)](#module_@georgealways/js..dist) ⇒ <code>number</code>
    * [~dist2(a, b, c, d)](#module_@georgealways/js..dist2) ⇒ <code>number</code>
    * [~deg2rad(d)](#module_@georgealways/js..deg2rad) ⇒ <code>number</code>
    * [~rad2deg(r)](#module_@georgealways/js..rad2deg) ⇒ <code>number</code>
    * [~wrap(v, r)](#module_@georgealways/js..wrap) ⇒ <code>number</code>

<a name="module_@georgealways/js..Random"></a>

### @georgealways/js~Random
Random number and array shuffling utilities.

**Kind**: inner class of [<code>@georgealways/js</code>](#module_@georgealways/js)  

* [~Random](#module_@georgealways/js..Random)
    * [.value()](#module_@georgealways/js..Random+value) ⇒ <code>number</code>
    * [.range(min, max)](#module_@georgealways/js..Random+range) ⇒ <code>number</code>
    * [.int(min, max)](#module_@georgealways/js..Random+int) ⇒ <code>number</code>
    * [.pick(arr)](#module_@georgealways/js..Random+pick) ⇒ <code>\*</code>
    * [.chance([percent])](#module_@georgealways/js..Random+chance) ⇒ <code>boolean</code>
    * [.sign([percent])](#module_@georgealways/js..Random+sign) ⇒ <code>number</code>
    * [.shuffle(arr, [start], [stop])](#module_@georgealways/js..Random+shuffle)

<a name="module_@georgealways/js..Random+value"></a>

#### random.value() ⇒ <code>number</code>
**Kind**: instance method of [<code>Random</code>](#module_@georgealways/js..Random)  
<a name="module_@georgealways/js..Random+range"></a>

#### random.range(min, max) ⇒ <code>number</code>
**Kind**: instance method of [<code>Random</code>](#module_@georgealways/js..Random)  

| Param | Type |
| --- | --- |
| min | <code>number</code> | 
| max | <code>number</code> | 

<a name="module_@georgealways/js..Random+int"></a>

#### random.int(min, max) ⇒ <code>number</code>
**Kind**: instance method of [<code>Random</code>](#module_@georgealways/js..Random)  

| Param | Type |
| --- | --- |
| min | <code>number</code> | 
| max | <code>number</code> | 

<a name="module_@georgealways/js..Random+pick"></a>

#### random.pick(arr) ⇒ <code>\*</code>
**Kind**: instance method of [<code>Random</code>](#module_@georgealways/js..Random)  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

<a name="module_@georgealways/js..Random+chance"></a>

#### random.chance([percent]) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Random</code>](#module_@georgealways/js..Random)  

| Param | Type | Default |
| --- | --- | --- |
| [percent] | <code>number</code> | <code>0.5</code> | 

<a name="module_@georgealways/js..Random+sign"></a>

#### random.sign([percent]) ⇒ <code>number</code>
**Kind**: instance method of [<code>Random</code>](#module_@georgealways/js..Random)  

| Param | Type | Default |
| --- | --- | --- |
| [percent] | <code>number</code> | <code>0.5</code> | 

<a name="module_@georgealways/js..Random+shuffle"></a>

#### random.shuffle(arr, [start], [stop])
**Kind**: instance method of [<code>Random</code>](#module_@georgealways/js..Random)  

| Param | Type | Default |
| --- | --- | --- |
| arr | <code>Array</code> |  | 
| [start] | <code>number</code> | <code>0</code> | 
| [stop] | <code>number</code> |  | 

<a name="module_@georgealways/js..SeededRandom"></a>

### @georgealways/js~SeededRandom ⇐ <code>Random</code>
Random number and array shuffling utilities whose output can be seeded.

**Kind**: inner class of [<code>@georgealways/js</code>](#module_@georgealways/js)  
**Extends**: <code>Random</code>  

* [~SeededRandom](#module_@georgealways/js..SeededRandom) ⇐ <code>Random</code>
    * [new SeededRandom([seed])](#new_module_@georgealways/js..SeededRandom_new)
    * [.seed([seed])](#module_@georgealways/js..SeededRandom+seed)

<a name="new_module_@georgealways/js..SeededRandom_new"></a>

#### new SeededRandom([seed])

| Param | Type |
| --- | --- |
| [seed] | <code>number</code> | 

<a name="module_@georgealways/js..SeededRandom+seed"></a>

#### seededRandom.seed([seed])
**Kind**: instance method of [<code>SeededRandom</code>](#module_@georgealways/js..SeededRandom)  

| Param | Type |
| --- | --- |
| [seed] | <code>number</code> | 

<a name="module_@georgealways/js..Noise"></a>

### @georgealways/js~Noise
Generator for Perlin and Simplex gradient noise functions. Computes 
single-octave or fractal noise values in the range of [0,1].

**Kind**: inner class of [<code>@georgealways/js</code>](#module_@georgealways/js)  

* [~Noise](#module_@georgealways/js..Noise)
    * [new Noise(seed)](#new_module_@georgealways/js..Noise_new)
    * [.octaves](#module_@georgealways/js..Noise+octaves)
    * [.persistence](#module_@georgealways/js..Noise+persistence)
    * [.lacunarity](#module_@georgealways/js..Noise+lacunarity)
    * [.seed(seed)](#module_@georgealways/js..Noise+seed)
    * [.perlin(x, [y], [z])](#module_@georgealways/js..Noise+perlin) ⇒ <code>number</code>
    * [.simplex(x, [y], [z])](#module_@georgealways/js..Noise+simplex) ⇒ <code>number</code>
    * [.perlin1(x)](#module_@georgealways/js..Noise+perlin1) ⇒ <code>number</code>
    * [.perlin2(x, y)](#module_@georgealways/js..Noise+perlin2) ⇒ <code>number</code>
    * [.perlin3(x, y, z)](#module_@georgealways/js..Noise+perlin3) ⇒ <code>number</code>
    * [.simplex1(x)](#module_@georgealways/js..Noise+simplex1) ⇒ <code>number</code>
    * [.simplex2(x, y)](#module_@georgealways/js..Noise+simplex2) ⇒ <code>number</code>
    * [.simplex3(x, y, z)](#module_@georgealways/js..Noise+simplex3) ⇒ <code>number</code>

<a name="new_module_@georgealways/js..Noise_new"></a>

#### new Noise(seed)
TODO.


| Param | Type |
| --- | --- |
| seed | <code>number</code> | 

<a name="module_@georgealways/js..Noise+octaves"></a>

#### noise.octaves
TODO.

**Kind**: instance property of [<code>Noise</code>](#module_@georgealways/js..Noise)  
<a name="module_@georgealways/js..Noise+persistence"></a>

#### noise.persistence
TODO.

**Kind**: instance property of [<code>Noise</code>](#module_@georgealways/js..Noise)  
<a name="module_@georgealways/js..Noise+lacunarity"></a>

#### noise.lacunarity
TODO.

**Kind**: instance property of [<code>Noise</code>](#module_@georgealways/js..Noise)  
<a name="module_@georgealways/js..Noise+seed"></a>

#### noise.seed(seed)
TODO.

**Kind**: instance method of [<code>Noise</code>](#module_@georgealways/js..Noise)  

| Param | Type |
| --- | --- |
| seed | <code>number</code> | 

<a name="module_@georgealways/js..Noise+perlin"></a>

#### noise.perlin(x, [y], [z]) ⇒ <code>number</code>
TODO.

**Kind**: instance method of [<code>Noise</code>](#module_@georgealways/js..Noise)  
**Returns**: <code>number</code> - Noise value from [0,1].  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| [y] | <code>number</code> | 
| [z] | <code>number</code> | 

<a name="module_@georgealways/js..Noise+simplex"></a>

#### noise.simplex(x, [y], [z]) ⇒ <code>number</code>
TODO.

**Kind**: instance method of [<code>Noise</code>](#module_@georgealways/js..Noise)  
**Returns**: <code>number</code> - Noise value from [0,1].  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| [y] | <code>number</code> | 
| [z] | <code>number</code> | 

<a name="module_@georgealways/js..Noise+perlin1"></a>

#### noise.perlin1(x) ⇒ <code>number</code>
TODO.

**Kind**: instance method of [<code>Noise</code>](#module_@georgealways/js..Noise)  
**Returns**: <code>number</code> - Noise value from [0,1].  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 

<a name="module_@georgealways/js..Noise+perlin2"></a>

#### noise.perlin2(x, y) ⇒ <code>number</code>
**Kind**: instance method of [<code>Noise</code>](#module_@georgealways/js..Noise)  
**Returns**: <code>number</code> - Noise value from [0,1].  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| y | <code>\*</code> | 

<a name="module_@georgealways/js..Noise+perlin3"></a>

#### noise.perlin3(x, y, z) ⇒ <code>number</code>
**Kind**: instance method of [<code>Noise</code>](#module_@georgealways/js..Noise)  
**Returns**: <code>number</code> - Noise value from [0,1].  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| y | <code>\*</code> | 
| z | <code>\*</code> | 

<a name="module_@georgealways/js..Noise+simplex1"></a>

#### noise.simplex1(x) ⇒ <code>number</code>
**Kind**: instance method of [<code>Noise</code>](#module_@georgealways/js..Noise)  
**Returns**: <code>number</code> - Noise value from [0,1].  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 

<a name="module_@georgealways/js..Noise+simplex2"></a>

#### noise.simplex2(x, y) ⇒ <code>number</code>
**Kind**: instance method of [<code>Noise</code>](#module_@georgealways/js..Noise)  
**Returns**: <code>number</code> - Noise value from [0,1].  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| y | <code>\*</code> | 

<a name="module_@georgealways/js..Noise+simplex3"></a>

#### noise.simplex3(x, y, z) ⇒ <code>number</code>
**Kind**: instance method of [<code>Noise</code>](#module_@georgealways/js..Noise)  
**Returns**: <code>number</code> - Noise value from [0,1].  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| y | <code>\*</code> | 
| z | <code>\*</code> | 

<a name="module_@georgealways/js..URL"></a>

### @georgealways/js~URL
**Kind**: inner class of [<code>@georgealways/js</code>](#module_@georgealways/js)  

* [~URL](#module_@georgealways/js..URL)
    * [.hash](#module_@georgealways/js..URL+hash)
    * [.strings](#module_@georgealways/js..URL+strings)
    * [.boolean(name, [defaultValue])](#module_@georgealways/js..URL+boolean) ⇒ <code>boolean</code>
    * [.number(name, [defaultValue])](#module_@georgealways/js..URL+number) ⇒ <code>number</code>

<a name="module_@georgealways/js..URL+hash"></a>

#### urL.hash
**Kind**: instance property of [<code>URL</code>](#module_@georgealways/js..URL)  
<a name="module_@georgealways/js..URL+strings"></a>

#### urL.strings
**Kind**: instance property of [<code>URL</code>](#module_@georgealways/js..URL)  
<a name="module_@georgealways/js..URL+boolean"></a>

#### urL.boolean(name, [defaultValue]) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>URL</code>](#module_@georgealways/js..URL)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| [defaultValue] | <code>boolean</code> | 

<a name="module_@georgealways/js..URL+number"></a>

#### urL.number(name, [defaultValue]) ⇒ <code>number</code>
**Kind**: instance method of [<code>URL</code>](#module_@georgealways/js..URL)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| [defaultValue] | <code>number</code> | 

<a name="module_@georgealways/js..Shuffler"></a>

### @georgealways/js~Shuffler
**Kind**: inner class of [<code>@georgealways/js</code>](#module_@georgealways/js)  

* [~Shuffler](#module_@georgealways/js..Shuffler)
    * [new Shuffler(arr, rng)](#new_module_@georgealways/js..Shuffler_new)
    * [.next()](#module_@georgealways/js..Shuffler+next) ⇒ <code>\*</code>

<a name="new_module_@georgealways/js..Shuffler_new"></a>

#### new Shuffler(arr, rng)

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| rng | <code>Random</code> | 

<a name="module_@georgealways/js..Shuffler+next"></a>

#### shuffler.next() ⇒ <code>\*</code>
**Kind**: instance method of [<code>Shuffler</code>](#module_@georgealways/js..Shuffler)  
<a name="module_@georgealways/js..is"></a>

### @georgealways/js~is
Boolean test methods for type introspection.

**Kind**: inner constant of [<code>@georgealways/js</code>](#module_@georgealways/js)  

* [~is](#module_@georgealways/js..is)
    * [.string(v)](#module_@georgealways/js..is.string) ⇒ <code>boolean</code>
    * [.function(v)](#module_@georgealways/js..is.function) ⇒ <code>boolean</code>
    * [.number(v)](#module_@georgealways/js..is.number) ⇒ <code>boolean</code>
    * [.array(v)](#module_@georgealways/js..is.array) ⇒ <code>boolean</code>
    * [.object(v)](#module_@georgealways/js..is.object) ⇒ <code>boolean</code>
    * [.boolean(v)](#module_@georgealways/js..is.boolean) ⇒ <code>boolean</code>

<a name="module_@georgealways/js..is.string"></a>

#### is.string(v) ⇒ <code>boolean</code>
**Kind**: static method of [<code>is</code>](#module_@georgealways/js..is)  
**Returns**: <code>boolean</code> - true if the value is a string  

| Param | Type |
| --- | --- |
| v | <code>\*</code> | 

<a name="module_@georgealways/js..is.function"></a>

#### is.function(v) ⇒ <code>boolean</code>
**Kind**: static method of [<code>is</code>](#module_@georgealways/js..is)  
**Returns**: <code>boolean</code> - true if the value is a function  

| Param | Type |
| --- | --- |
| v | <code>\*</code> | 

<a name="module_@georgealways/js..is.number"></a>

#### is.number(v) ⇒ <code>boolean</code>
**Kind**: static method of [<code>is</code>](#module_@georgealways/js..is)  
**Returns**: <code>boolean</code> - true if the value is a string  

| Param | Type |
| --- | --- |
| v | <code>\*</code> | 

<a name="module_@georgealways/js..is.array"></a>

#### is.array(v) ⇒ <code>boolean</code>
**Kind**: static method of [<code>is</code>](#module_@georgealways/js..is)  
**Returns**: <code>boolean</code> - true if the value is an array  

| Param | Type |
| --- | --- |
| v | <code>\*</code> | 

<a name="module_@georgealways/js..is.object"></a>

#### is.object(v) ⇒ <code>boolean</code>
**Kind**: static method of [<code>is</code>](#module_@georgealways/js..is)  
**Returns**: <code>boolean</code> - true if the value is an object  

| Param | Type |
| --- | --- |
| v | <code>\*</code> | 

<a name="module_@georgealways/js..is.boolean"></a>

#### is.boolean(v) ⇒ <code>boolean</code>
**Kind**: static method of [<code>is</code>](#module_@georgealways/js..is)  
**Returns**: <code>boolean</code> - true if the value is a boolean  

| Param | Type |
| --- | --- |
| v | <code>\*</code> | 

<a name="module_@georgealways/js..random"></a>

### @georgealways/js~random
Shared static instance of Random.

**Kind**: inner constant of [<code>@georgealways/js</code>](#module_@georgealways/js)  
<a name="module_@georgealways/js..seededRandom"></a>

### @georgealways/js~seededRandom
Shared static instance of SeededRandom. Seeded with +new Date() on load.

**Kind**: inner constant of [<code>@georgealways/js</code>](#module_@georgealways/js)  
<a name="module_@georgealways/js..noise"></a>

### @georgealways/js~noise
Shared static instance of Noise. Seeded with +new Date() on load.

**Kind**: inner constant of [<code>@georgealways/js</code>](#module_@georgealways/js)  
<a name="module_@georgealways/js..url"></a>

### @georgealways/js~url
Shared static instance of URL. Uses the value of location.href on load.

**Kind**: inner constant of [<code>@georgealways/js</code>](#module_@georgealways/js)  
<a name="module_@georgealways/js..map"></a>

### @georgealways/js~map(t, a, b, c, d) ⇒ <code>number</code>
**Kind**: inner method of [<code>@georgealways/js</code>](#module_@georgealways/js)  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| a | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="module_@georgealways/js..lerp"></a>

### @georgealways/js~lerp(a, b, t) ⇒ <code>number</code>
**Kind**: inner method of [<code>@georgealways/js</code>](#module_@georgealways/js)  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| t | <code>number</code> | 

<a name="module_@georgealways/js..normalize"></a>

### @georgealways/js~normalize(a, b, v) ⇒ <code>number</code>
**Kind**: inner method of [<code>@georgealways/js</code>](#module_@georgealways/js)  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| v | <code>number</code> | 

<a name="module_@georgealways/js..cmap"></a>

### @georgealways/js~cmap(t, a, b, c, d) ⇒ <code>number</code>
**Kind**: inner method of [<code>@georgealways/js</code>](#module_@georgealways/js)  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| a | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="module_@georgealways/js..clerp"></a>

### @georgealways/js~clerp(a, b, t) ⇒ <code>number</code>
**Kind**: inner method of [<code>@georgealways/js</code>](#module_@georgealways/js)  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| t | <code>number</code> | 

<a name="module_@georgealways/js..cnormalize"></a>

### @georgealways/js~cnormalize(a, b, v) ⇒ <code>number</code>
**Kind**: inner method of [<code>@georgealways/js</code>](#module_@georgealways/js)  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| v | <code>number</code> | 

<a name="module_@georgealways/js..clamp"></a>

### @georgealways/js~clamp(v, a, b) ⇒ <code>number</code>
**Kind**: inner method of [<code>@georgealways/js</code>](#module_@georgealways/js)  

| Param | Type |
| --- | --- |
| v | <code>number</code> | 
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="module_@georgealways/js..clamp01"></a>

### @georgealways/js~clamp01(v) ⇒ <code>number</code>
**Kind**: inner method of [<code>@georgealways/js</code>](#module_@georgealways/js)  

| Param | Type |
| --- | --- |
| v | <code>number</code> | 

<a name="module_@georgealways/js..dist"></a>

### @georgealways/js~dist(a, b, c, d) ⇒ <code>number</code>
**Kind**: inner method of [<code>@georgealways/js</code>](#module_@georgealways/js)  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="module_@georgealways/js..dist2"></a>

### @georgealways/js~dist2(a, b, c, d) ⇒ <code>number</code>
**Kind**: inner method of [<code>@georgealways/js</code>](#module_@georgealways/js)  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="module_@georgealways/js..deg2rad"></a>

### @georgealways/js~deg2rad(d) ⇒ <code>number</code>
**Kind**: inner method of [<code>@georgealways/js</code>](#module_@georgealways/js)  

| Param | Type |
| --- | --- |
| d | <code>number</code> | 

<a name="module_@georgealways/js..rad2deg"></a>

### @georgealways/js~rad2deg(r) ⇒ <code>number</code>
**Kind**: inner method of [<code>@georgealways/js</code>](#module_@georgealways/js)  

| Param | Type |
| --- | --- |
| r | <code>number</code> | 

<a name="module_@georgealways/js..wrap"></a>

### @georgealways/js~wrap(v, r) ⇒ <code>number</code>
**Kind**: inner method of [<code>@georgealways/js</code>](#module_@georgealways/js)  

| Param | Type |
| --- | --- |
| v | <code>number</code> | 
| r | <code>number</code> | 

