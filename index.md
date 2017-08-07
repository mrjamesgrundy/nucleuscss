---
layout: home
title: nucleuscss
sub: Style Guide
---

##### On this page
* [Typography](#typography "Typography")
* [Colors](#colors "Colors")
* [Buttons](#buttons "Buttons")

## Typography
* [Hierarchy](#hierarchy "Hierarchy")
* [Alignment](#alignment "Alignment")
* [Abbreviations](#abbreviations "Abbreviations")
* [Weights and Types](#weights-and-types "Weights and Types")
* [Lists](#lists "Lists")
* [Styles](#styles "Styles")
* [Usage](#usage "Usage")

### Hierarchy

#### Heading 1
<h1 class="e-heading--main">Open Sans Semibold 600 32px</h1>

{% highlight html %}
<h1 class="e-heading--main">Open Sans Semibold 600 32px</h1>
{% endhighlight %}

#### Heading 2
<h2 class="e-heading--sub">Open Sans Semibold 600 24px</h2>

{% highlight html %}
<h2 class="e-heading--sub">Open Sans Semibold 600 24px</h2>
{% endhighlight %}

#### Heading 3
<h3 class="e-heading--section">Open Sans Semibold 600 20px</h3>

{% highlight html %}
<h3 class="e-heading--section">Open Sans Semibold 600 20px</h3>
{% endhighlight %}

#### Heading 4
<h4 class="e-heading--descriptive">Open Sans Semibold 600 16px</h4>

{% highlight html %}
<h4 class="e-heading--descriptive">Open Sans Semibold 600 16px</h4>
{% endhighlight %}

#### Heading 5
<h5 class="e-heading--overview">Open Sans Semibold 700 14px</h5>

{% highlight html %}
<h5 class="e-heading--overview">Open Sans Semibold 700 14px</h5>
{% endhighlight %}

#### Heading 6
<h6 class="e-heading--headline">Open Sans Bold 700 14px</h6>

{% highlight html %}
<h6 class="e-heading--headline">Open Sans Bold 700 14px</h6>
{% endhighlight %}

#### Paragraph
<p class="e-paragraph">Open Sans Regular 400 13px</p>

{% highlight html %}
<p class="e-paragraph">Open Sans Regular 400 13px</p>
{% endhighlight %}

#### Code
<code class="e-code">Monospace Regular 14px</code>

{% highlight html %}
<code class="e-code">Monospace Regular 14px</code>
{% endhighlight %}

#### Blockquote
<blockquote class="e-blockquote">
  <p class="e-blockquote__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="e-blockquote__footer">Source Name, <cite title="Source Title">Source Title</cite></footer>
</blockquote>

{% highlight html %}
<blockquote class="e-blockquote">
  <p class="e-blockquote__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="e-blockquote__footer">Source Name, <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endhighlight %}

### Alignment
<p class="e-paragraph u-typography--left">Text align content left</p>
<p class="e-paragraph u-typography--center">Text align content center</p>
<p class="e-paragraph u-typography--right">Text align content right</p>
<p class="e-paragraph u-typography--justify">Justify content</p>
<p class="e-paragraph u-typography--nowrap">Nowrap content</p>

{% highlight html %}
<p class="e-paragraph u-typography--left">Text align content left</p>
<p class="e-paragraph u-typography--center">Text align content center</p>
<p class="e-paragraph u-typography--right">Text align content right</p>
<p class="e-paragraph u-typography--justify">Justify content</p>
<p class="e-paragraph u-typography--nowrap">Nowrap content</p>
{% endhighlight %}

### Abbreviations
<p class="e-paragraph"><abbr class="e-paragraph--help" title="Help text">Help Text</abbr></p>

{% highlight html %}
<p class="e-paragraph"><abbr class="e-paragraph--help" title="Help text">Help Text</abbr></p>
{% endhighlight %}

### Weights and Types
<p class="e-paragraph u-typography--bold">Open Sans Bold 700</p>
<p class="e-paragraph u-typography--semi-bold">Open Sans Semi Bold 600</p>
<p class="e-paragraph u-typography--regular">Open Sans Regular 400</p>
<p class="e-paragraph u-typography--monospace">Monospace 400</p>

{% highlight html %}
<p class="e-paragraph u-typography--bold">Open Sans Bold 700</p>
<p class="e-paragraph u-typography--semi-bold">Open Sans Semi Bold 600</p>
<p class="e-paragraph u-typography--regular">Open Sans Regular 400</p>
<p class="e-paragraph u-typography--monospace">Monospace 400</p>
{% endhighlight %}

### Lists

#### Definition List
<dl class="e-definition-list">
  <dt>Definition list title 1</dt>
  <dd>Definition list description 1</dd>
  <dt>Definition list title 2</dt>
  <dd>Definition list description 2</dd>
  <dt>Definition list title 3</dt>
  <dd>Definition list description 3</dd>
</dl>

{% highlight html %}
<dl class="e-definition-list">
  <dt>Definition list title 1</dt>
  <dd>Definition list description 1</dd>
  <dt>Definition list title 2</dt>
  <dd>Definition list description 2</dd>
  <dt>Definition list title 3</dt>
  <dd>Definition list description 3</dd>
</dl>
{% endhighlight %}

#### Ordered List
<ol class="e-ordered-list">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3
    <ol class="e-ordered-list">
      <li>Nested list item 1</li>
      <li>Nested list item 2
        <ol class="e-ordered-list">
          <li>Nested list item 1</li>
          <li>Nested list item 2</li>
        </ol>
      </li>
    </ol>
  </li>
</ol>

{% highlight html %}
<ol class="e-ordered-list">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3
    <ol class="e-ordered-list">
      <li>Nested list item 1</li>
      <li>Nested list item 2
        <ol class="e-ordered-list">
          <li>Nested list item 1</li>
          <li>Nested list item 2</li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
{% endhighlight %}

#### Unordered List
<ul class="e-unordered-list">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3
    <ul>
      <li>Nested list item 1</li>
      <li>Nested list item 2
        <ul>
          <li>Nested list item 1</li>
          <li>Nested list item 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

{% highlight html %}
<ul class="e-unordered-list">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3
    <ul>
      <li>Nested list item 1</li>
      <li>Nested list item 2
        <ul>
          <li>Nested list item 1</li>
          <li>Nested list item 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
{% endhighlight %}

#### Unstyled List
<ul class="e-unordered-list e-unordered-list--unstyled">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3
    <ul>
      <li>Nested list item 1</li>
      <li>Nested list item 2
        <ul>
          <li>Nested list item 1</li>
          <li>Nested list item 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

{% highlight html %}
<ul class="e-unordered-list e-unordered-list--unstyled">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3
    <ul>
      <li>Nested list item 1</li>
      <li>Nested list item 2
        <ul>
          <li>Nested list item 1</li>
          <li>Nested list item 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
{% endhighlight %}

#### Inline List
<ul class="e-unordered-list e-unordered-list--inline">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>

{% highlight html %}
<ul class="e-unordered-list e-unordered-list--inline">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
{% endhighlight %}

### Styles
<p class="e-paragraph"><span class="u-typography--primary">Primary</span></p>
<p class="e-paragraph"><span class="u-typography--success">Success</span></p>
<p class="e-paragraph"><span class="u-typography--warning">Warning</span></p>
<p class="e-paragraph"><span class="u-typography--information">Information</span></p>
<p class="e-paragraph"><span class="u-typography--error">Error</span></p>
<p class="e-paragraph"><span class="u-typography--quiet">Quiet</span></p>
<p class="e-paragraph"><span class="u-typography--secret">Secret</span></p>
<p class="e-paragraph"><span class="u-typography--highlight">Highlight</span></p>
<p class="e-paragraph"><code class="u-typography--code">code</code></p>

{% highlight html %}
<p class="e-paragraph"><span class="u-typography--primary">Primary</span></p>
<p class="e-paragraph"><span class="u-typography--success">Success</span></p>
<p class="e-paragraph"><span class="u-typography--info">Info</span></p>
<p class="e-paragraph"><span class="u-typography--warning">Warning</span></p>
<p class="e-paragraph"><span class="u-typography--error">Error</span></p>
<p class="e-paragraph"><span class="u-typography--quiet">Quiet</span></p>
<p class="e-paragraph"><span class="u-typography--secret">Secret</span></p>
<p class="e-paragraph"><span class="u-typography--highlight">Highlight</span></p>
<p class="e-paragraph"><code class="u-typography--code">code</code></p>
{% endhighlight %}

### Usage
<h1 class="e-heading--main">Main Headline</h1>
<h2 class="e-heading--sub u-typography--quiet">Sub Headline</h2>
<h6 class="e-heading--headline u-typography--information">Date / Time</h6>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<h3 class="e-heading--section">Section Headline</h3>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

<h4 class="e-heading--descriptive">Descriptive Headline</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<ul class="c-unordered-list">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3
    <ul>
      <li>Nested list item 1</li>
      <li>Nested list item 2
        <ul>
          <li>Nested list item 1</li>
          <li>Nested list item 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h5 class="e-heading--overview u-typography--secret">Overview Headline</h5>
<p class="u-typography--secret">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<ol class="c-ordered-list u-typography--secret">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3
    <ol class="c-ordered-list">
      <li>Nested list item 1</li>
      <li>Nested list item 2
        <ol class="c-ordered-list">
          <li>Nested list item 1</li>
          <li>Nested list item 2</li>
        </ol>
      </li>
    </ol>
  </li>
</ol>

<h6 class="e--heading-headline u-typography--info">Section Headline</h6>
<dl class="e-definition-list">
  <dt>Definition list title 1</dt>
  <dd><a href="#" title="Definition list description 1">Definition list description 1</a></dd>
  <dt>Definition list title 2</dt>
  <dd><a href="#" title="Definition list description 2">Definition list description 2</a></dd>
  <dt>Definition list title 3</dt>
  <dd><a href="#" title="Definition list description 3">Definition list description 3</a></dd>
</dl>

## Colors
* [Brand Primary](#brand-primary "Brand Primary")
* [Brand Secondary](#brand-secondary "Brand Secondary")
* [Monotone](#monotone "Monotone")
* [UI](#ui "UI")

### Brand Primary
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--primary-100">
    <h6 class="e-heading--headline">Primary 100</h6>
    <code>#000066</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--primary-80">
    <h6 class="e-heading--headline">Primary 80</h6>
    <code>#333385</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--primary-60">
    <h6 class="e-heading--headline">Primary 60</h6>
    <code>#6666a3</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--primary-40">
    <h6 class="e-heading--headline">Primary 40</h6>
    <code>#9999c2</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--primary-20">
    <h6 class="e-heading--headline">Primary 20</h6>
    <code>#cccce0</code>
  </div>
</div>

### Brand Secondary
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--secondary-100">
    <h6 class="e-heading--headline">Secondary 100</h6>
    <code>#cc0000</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--secondary-80">
    <h6 class="e-heading--headline">Secondary 80</h6>
    <code>#d63333</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--secondary-60">
    <h6 class="e-heading--headline">Secondary 60</h6>
    <code>#e06666</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--secondary-40">
    <h6 class="e-heading--headline">Secondary 40</h6>
    <code>#eb9999</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--secondary-20">
    <h6 class="e-heading--headline">Secondary 20</h6>
    <code>#f5cccc</code>
  </div>
</div>

### Monotone
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--accent-100">
    <h6 class="e-heading--headline">Monotone 100</h6>
    <code>#191919</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--accent-80">
    <h6 class="e-heading--headline">Monotone 80</h6>
    <code>#4c4c4c</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--accent-60">
    <h6 class="e-heading--headline">Monotone 60</h6>
    <code>#7f7f7f</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--accent-40">
    <h6 class="e-heading--headline">Monotone 40</h6>
    <code>#b2b2b2</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--accent-20">
    <h6 class="e-heading--headline">Monotone 20</h6>
    <code>#e5e5e5</code>
  </div>
</div>

### UI
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--success">
    <h6 class="e-heading--headline">Success</h6>
    <code>#43b36c</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--warning">
    <h6 class="e-heading--headline">Warning</h6>
    <code>#f68f23</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--information">
    <h6 class="e-heading--headline">Information</h6>
    <code>#0275d8</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--error">
    <h6 class="e-heading--headline">Error</h6>
    <code>#ea4747</code>
  </div>
</div>
<div class="o-swatch">
  <div class="o-swatch__background o-swatch__background--links">
    <h6 class="e-heading--headline">Links</h6>
    <code>#0a65be</code>
  </div>
</div>

## Buttons

### Base
<button class="c-button c-button--medium" type="button">Button</button>
<button class="c-button c-button--medium" type="submit">Submit button</button>
<a href="#" class="c-button c-button--medium" role="button">Link Button</a>
<input class="c-button c-button--medium" type="button" value="Input button">
<input class="c-button c-button--medium" type="submit" value="Input submit button">
<label class="c-button c-button--medium">Browse Button<input class="is-hidden" type="file"></label>

{% highlight html %}
<button class="c-button c-button--medium" type="button">Button</button>
<button class="c-button c-button--medium" type="submit">Submit button</button>
<a href="#" class="c-button c-button--medium" role="button">Link Button</a>
<input class="c-button c-button--medium" type="button" value="Input button">
<input class="c-button c-button--medium" type="submit" value="Input submit button">
<label class="c-button c-button--medium">Browse Button<input class="is-hidden" type="file"></label>
{% endhighlight %}
