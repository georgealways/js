## Classes

<dl>
<dt><a href="#Random">Random</a></dt>
<dd></dd>
<dt><a href="#SeededRandom">SeededRandom</a> ⇐ <code><a href="#Random">Random</a></code></dt>
<dd></dd>
<dt><a href="#Noise">Noise</a></dt>
<dd></dd>
<dt><a href="#URL">URL</a></dt>
<dd></dd>
<dt><a href="#Shuffler">Shuffler</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#random">random</a></dt>
<dd></dd>
<dt><a href="#seededRandom">seededRandom</a></dt>
<dd></dd>
<dt><a href="#noise">noise</a></dt>
<dd></dd>
<dt><a href="#url">url</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#map">map(t, a, b, c, d)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#lerp">lerp(a, b, t)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#normalize">normalize(a, b, v)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#cmap">cmap(t, a, b, c, d)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#clerp">clerp(a, b, t)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#cnormalize">cnormalize(a, b, v)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#clamp">clamp(v, a, b)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#clamp01">clamp01(v)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#dist">dist(a, b, c, d)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#dist2">dist2(a, b, c, d)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#deg2rad">deg2rad(d)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#rad2deg">rad2deg(r)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#wrap">wrap(v, r)</a> ⇒ <code>number</code></dt>
<dd></dd>
</dl>

<a name="Random"></a>

## Random
**Kind**: global class  

* [Random](#Random)
    * [.value()](#Random+value) ⇒ <code>number</code>
    * [.range(min, max)](#Random+range) ⇒ <code>number</code>
    * [.int(min, max)](#Random+int) ⇒ <code>number</code>
    * [.pick(arr)](#Random+pick) ⇒ <code>\*</code>
    * [.chance(percent)](#Random+chance) ⇒ <code>boolean</code>
    * [.sign(percent)](#Random+sign) ⇒ <code>number</code>
    * [.shuffle(arr, [start], [stop])](#Random+shuffle)

<a name="Random+value"></a>

### random.value() ⇒ <code>number</code>
**Kind**: instance method of [<code>Random</code>](#Random)  
<a name="Random+range"></a>

### random.range(min, max) ⇒ <code>number</code>
**Kind**: instance method of [<code>Random</code>](#Random)  

| Param | Type |
| --- | --- |
| min | <code>number</code> | 
| max | <code>number</code> | 

<a name="Random+int"></a>

### random.int(min, max) ⇒ <code>number</code>
**Kind**: instance method of [<code>Random</code>](#Random)  

| Param | Type |
| --- | --- |
| min | <code>number</code> | 
| max | <code>number</code> | 

<a name="Random+pick"></a>

### random.pick(arr) ⇒ <code>\*</code>
**Kind**: instance method of [<code>Random</code>](#Random)  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

<a name="Random+chance"></a>

### random.chance(percent) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Random</code>](#Random)  

| Param | Type | Default |
| --- | --- | --- |
| percent | <code>number</code> | <code>0.5</code> | 

<a name="Random+sign"></a>

### random.sign(percent) ⇒ <code>number</code>
**Kind**: instance method of [<code>Random</code>](#Random)  

| Param | Type | Default |
| --- | --- | --- |
| percent | <code>number</code> | <code>0.5</code> | 

<a name="Random+shuffle"></a>

### random.shuffle(arr, [start], [stop])
**Kind**: instance method of [<code>Random</code>](#Random)  

| Param | Type | Default |
| --- | --- | --- |
| arr | <code>Array</code> |  | 
| [start] | <code>number</code> | <code>0</code> | 
| [stop] | <code>number</code> |  | 

<a name="SeededRandom"></a>

## SeededRandom ⇐ [<code>Random</code>](#Random)
**Kind**: global class  
**Extends**: [<code>Random</code>](#Random)  

* [SeededRandom](#SeededRandom) ⇐ [<code>Random</code>](#Random)
    * [new SeededRandom(seed)](#new_SeededRandom_new)
    * [.seed([seed])](#SeededRandom+seed)
    * [.value()](#Random+value) ⇒ <code>number</code>
    * [.range(min, max)](#Random+range) ⇒ <code>number</code>
    * [.int(min, max)](#Random+int) ⇒ <code>number</code>
    * [.pick(arr)](#Random+pick) ⇒ <code>\*</code>
    * [.chance(percent)](#Random+chance) ⇒ <code>boolean</code>
    * [.sign(percent)](#Random+sign) ⇒ <code>number</code>
    * [.shuffle(arr, [start], [stop])](#Random+shuffle)

<a name="new_SeededRandom_new"></a>

### new SeededRandom(seed)

| Param | Type |
| --- | --- |
| seed | <code>number</code> | 

<a name="SeededRandom+seed"></a>

### seededRandom.seed([seed])
**Kind**: instance method of [<code>SeededRandom</code>](#SeededRandom)  

| Param | Type |
| --- | --- |
| [seed] | <code>number</code> | 

<a name="Random+value"></a>

### seededRandom.value() ⇒ <code>number</code>
**Kind**: instance method of [<code>SeededRandom</code>](#SeededRandom)  
**Overrides**: [<code>value</code>](#Random+value)  
<a name="Random+range"></a>

### seededRandom.range(min, max) ⇒ <code>number</code>
**Kind**: instance method of [<code>SeededRandom</code>](#SeededRandom)  
**Overrides**: [<code>range</code>](#Random+range)  

| Param | Type |
| --- | --- |
| min | <code>number</code> | 
| max | <code>number</code> | 

<a name="Random+int"></a>

### seededRandom.int(min, max) ⇒ <code>number</code>
**Kind**: instance method of [<code>SeededRandom</code>](#SeededRandom)  
**Overrides**: [<code>int</code>](#Random+int)  

| Param | Type |
| --- | --- |
| min | <code>number</code> | 
| max | <code>number</code> | 

<a name="Random+pick"></a>

### seededRandom.pick(arr) ⇒ <code>\*</code>
**Kind**: instance method of [<code>SeededRandom</code>](#SeededRandom)  
**Overrides**: [<code>pick</code>](#Random+pick)  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

<a name="Random+chance"></a>

### seededRandom.chance(percent) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>SeededRandom</code>](#SeededRandom)  
**Overrides**: [<code>chance</code>](#Random+chance)  

| Param | Type | Default |
| --- | --- | --- |
| percent | <code>number</code> | <code>0.5</code> | 

<a name="Random+sign"></a>

### seededRandom.sign(percent) ⇒ <code>number</code>
**Kind**: instance method of [<code>SeededRandom</code>](#SeededRandom)  
**Overrides**: [<code>sign</code>](#Random+sign)  

| Param | Type | Default |
| --- | --- | --- |
| percent | <code>number</code> | <code>0.5</code> | 

<a name="Random+shuffle"></a>

### seededRandom.shuffle(arr, [start], [stop])
**Kind**: instance method of [<code>SeededRandom</code>](#SeededRandom)  
**Overrides**: [<code>shuffle</code>](#Random+shuffle)  

| Param | Type | Default |
| --- | --- | --- |
| arr | <code>Array</code> |  | 
| [start] | <code>number</code> | <code>0</code> | 
| [stop] | <code>number</code> |  | 

<a name="Noise"></a>

## Noise
**Kind**: global class  

* [Noise](#Noise)
    * [new Noise(seed)](#new_Noise_new)
    * [.octaves](#Noise+octaves)
    * [.persistence](#Noise+persistence)
    * [.lacunarity](#Noise+lacunarity)
    * [.seed(seed)](#Noise+seed)
    * [.perlin(x, [y], [z])](#Noise+perlin) ⇒ <code>number</code>
    * [.simplex(x, [y], [z])](#Noise+simplex) ⇒ <code>number</code>
    * [.perlin1(x)](#Noise+perlin1)
    * [.perlin2(x, y)](#Noise+perlin2)
    * [.perlin3(x, y, z)](#Noise+perlin3)
    * [.simplex1(x)](#Noise+simplex1)
    * [.simplex2(x, y)](#Noise+simplex2)
    * [.simplex3(x, y, z)](#Noise+simplex3)

<a name="new_Noise_new"></a>

### new Noise(seed)
TODO.


| Param | Type |
| --- | --- |
| seed | <code>number</code> | 

<a name="Noise+octaves"></a>

### noise.octaves
TODO.

**Kind**: instance property of [<code>Noise</code>](#Noise)  
<a name="Noise+persistence"></a>

### noise.persistence
TODO.

**Kind**: instance property of [<code>Noise</code>](#Noise)  
<a name="Noise+lacunarity"></a>

### noise.lacunarity
TODO.

**Kind**: instance property of [<code>Noise</code>](#Noise)  
<a name="Noise+seed"></a>

### noise.seed(seed)
TODO.

**Kind**: instance method of [<code>Noise</code>](#Noise)  

| Param | Type |
| --- | --- |
| seed | <code>number</code> | 

<a name="Noise+perlin"></a>

### noise.perlin(x, [y], [z]) ⇒ <code>number</code>
TODO.

**Kind**: instance method of [<code>Noise</code>](#Noise)  
**Returns**: <code>number</code> - Noise value from [0,1].  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| [y] | <code>number</code> | 
| [z] | <code>number</code> | 

<a name="Noise+simplex"></a>

### noise.simplex(x, [y], [z]) ⇒ <code>number</code>
TODO.

**Kind**: instance method of [<code>Noise</code>](#Noise)  
**Returns**: <code>number</code> - Noise value from [0,1].  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| [y] | <code>number</code> | 
| [z] | <code>number</code> | 

<a name="Noise+perlin1"></a>

### noise.perlin1(x)
TODO.

**Kind**: instance method of [<code>Noise</code>](#Noise)  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 

<a name="Noise+perlin2"></a>

### noise.perlin2(x, y)
**Kind**: instance method of [<code>Noise</code>](#Noise)  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| y | <code>\*</code> | 

<a name="Noise+perlin3"></a>

### noise.perlin3(x, y, z)
**Kind**: instance method of [<code>Noise</code>](#Noise)  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| y | <code>\*</code> | 
| z | <code>\*</code> | 

<a name="Noise+simplex1"></a>

### noise.simplex1(x)
**Kind**: instance method of [<code>Noise</code>](#Noise)  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 

<a name="Noise+simplex2"></a>

### noise.simplex2(x, y)
**Kind**: instance method of [<code>Noise</code>](#Noise)  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| y | <code>\*</code> | 

<a name="Noise+simplex3"></a>

### noise.simplex3(x, y, z)
**Kind**: instance method of [<code>Noise</code>](#Noise)  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| y | <code>\*</code> | 
| z | <code>\*</code> | 

<a name="URL"></a>

## URL
**Kind**: global class  

* [URL](#URL)
    * [.hash](#URL+hash)
    * [.strings](#URL+strings)
    * [.boolean(name, defaultValue)](#URL+boolean)
    * [.number(name, defaultValue)](#URL+number)

<a name="URL+hash"></a>

### urL.hash
**Kind**: instance property of [<code>URL</code>](#URL)  
<a name="URL+strings"></a>

### urL.strings
**Kind**: instance property of [<code>URL</code>](#URL)  
<a name="URL+boolean"></a>

### urL.boolean(name, defaultValue)
**Kind**: instance method of [<code>URL</code>](#URL)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| defaultValue | <code>any</code> | 

<a name="URL+number"></a>

### urL.number(name, defaultValue)
**Kind**: instance method of [<code>URL</code>](#URL)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| defaultValue | <code>any</code> | 

<a name="Shuffler"></a>

## Shuffler
**Kind**: global class  

* [Shuffler](#Shuffler)
    * [new Shuffler(arr, rng)](#new_Shuffler_new)
    * [.next()](#Shuffler+next) ⇒ <code>any</code>

<a name="new_Shuffler_new"></a>

### new Shuffler(arr, rng)

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| rng | [<code>Random</code>](#Random) | 

<a name="Shuffler+next"></a>

### shuffler.next() ⇒ <code>any</code>
**Kind**: instance method of [<code>Shuffler</code>](#Shuffler)  
<a name="random"></a>

## random
**Kind**: global constant  
<a name="seededRandom"></a>

## seededRandom
**Kind**: global constant  
<a name="noise"></a>

## noise
**Kind**: global constant  
<a name="url"></a>

## url
**Kind**: global constant  
<a name="map"></a>

## map(t, a, b, c, d) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| a | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="lerp"></a>

## lerp(a, b, t) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| t | <code>number</code> | 

<a name="normalize"></a>

## normalize(a, b, v) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| v | <code>number</code> | 

<a name="cmap"></a>

## cmap(t, a, b, c, d) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| a | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="clerp"></a>

## clerp(a, b, t) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| t | <code>number</code> | 

<a name="cnormalize"></a>

## cnormalize(a, b, v) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| v | <code>number</code> | 

<a name="clamp"></a>

## clamp(v, a, b) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| v | <code>number</code> | 
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="clamp01"></a>

## clamp01(v) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| v | <code>number</code> | 

<a name="dist"></a>

## dist(a, b, c, d) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="dist2"></a>

## dist2(a, b, c, d) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="deg2rad"></a>

## deg2rad(d) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| d | <code>number</code> | 

<a name="rad2deg"></a>

## rad2deg(r) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| r | <code>number</code> | 

<a name="wrap"></a>

## wrap(v, r) ⇒ <code>number</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| v | <code>number</code> | 
| r | <code>number</code> | 

