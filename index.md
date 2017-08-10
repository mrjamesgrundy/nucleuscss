---
layout: home
title: nucleuscss
sub: Style Guide
---

##### Sections
* [Typography](#typography "Typography")
* [Colors](#colors "Colors")
* [Buttons](#buttons "Buttons")
* [Grid](#grid "Grid")

---

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
    <ul class="e-unordered-list">
      <li>Nested list item 1</li>
      <li>Nested list item 2
        <ul class="e-unordered-list">
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
    <ul class="e-unordered-list">
      <li>Nested list item 1</li>
      <li>Nested list item 2
        <ul class="e-unordered-list">
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
<p class="e-paragraph"><span class="u-typography--success">Success</span></p>
<p class="e-paragraph"><span class="u-typography--warning">Warning</span></p>
<p class="e-paragraph"><span class="u-typography--information">Information</span></p>
<p class="e-paragraph"><span class="u-typography--error">Error</span></p>
<p class="e-paragraph"><span class="u-typography--quiet">Quiet</span></p>
<p class="e-paragraph"><span class="u-typography--secret">Secret</span></p>
<p class="e-paragraph"><span class="u-typography--highlight">Highlight</span></p>
<p class="e-paragraph"><code class="u-typography--code">code</code></p>

{% highlight html %}
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

<ul class="e-unordered-list">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3
    <ul class="e-unordered-list">
      <li>Nested list item 1</li>
      <li>Nested list item 2
        <ul class="e-unordered-list">
          <li>Nested list item 1</li>
          <li>Nested list item 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h5 class="e-heading--overview u-typography--secret">Overview Headline</h5>
<p class="u-typography--secret">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<ol class="e-ordered-list u-typography--secret">
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

<h6 class="e-heading--headline u-typography--information">Section Headline</h6>
<dl class="e-definition-list">
  <dt>Definition list title 1</dt>
  <dd><a href="#" title="Definition list description 1">Definition list description 1</a></dd>
  <dt>Definition list title 2</dt>
  <dd><a href="#" title="Definition list description 2">Definition list description 2</a></dd>
  <dt>Definition list title 3</dt>
  <dd><a href="#" title="Definition list description 3">Definition list description 3</a></dd>
</dl>

---

## Colors
* [Brand Primary](#brand-primary "Brand Primary")
* [Brand Secondary](#brand-secondary "Brand Secondary")
* [Monotone](#monotone "Monotone")
* [UI](#ui "UI")
* [Grid](#grid "Grid")

### Brand Primary
The brand color scheme is our main palette across the site and should be strictly adhered to.

<div class="o-grid o-grid--no-gutter">
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--primary-100">
        <h6 class="e-heading--headline">Primary 100</h6>
        <code>#000066</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--primary-80">
        <h6 class="e-heading--headline">Primary 80</h6>
        <code>#333385</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--primary-60">
        <h6 class="e-heading--headline">Primary 60</h6>
        <code>#6666a3</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--primary-40">
        <h6 class="e-heading--headline">Primary 40</h6>
        <code>#9999c2</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--primary-20">
        <h6 class="e-heading--headline">Primary 20</h6>
        <code>#cccce0</code>
      </div>
    </div>
  </div>
</div>


### Brand Secondary
The secondary palette should only be used on elements that relate to the primary brand.

<div class="o-grid o-grid--no-gutter">
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--secondary-100">
        <h6 class="e-heading--headline">Secondary 100</h6>
        <code>#cc0000</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--secondary-80">
        <h6 class="e-heading--headline">Secondary 80</h6>
        <code>#d63333</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--secondary-60">
        <h6 class="e-heading--headline">Secondary 60</h6>
        <code>#e06666</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--secondary-40">
        <h6 class="e-heading--headline">Secondary 40</h6>
        <code>#eb9999</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--secondary-20">
        <h6 class="e-heading--headline">Secondary 20</h6>
        <code>#f5cccc</code>
      </div>
    </div>
  </div>
</div>


### Monotone
The monotone palette is used purely as a secondary color scheme when contrast is required within the UI.

<div class="o-grid o-grid--no-gutter">
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--accent-100">
        <h6 class="e-heading--headline">Monotone 100</h6>
        <code>#191919</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--accent-80">
        <h6 class="e-heading--headline">Monotone 80</h6>
        <code>#4c4c4c</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--accent-60">
        <h6 class="e-heading--headline">Monotone 60</h6>
        <code>#7f7f7f</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--accent-40">
        <h6 class="e-heading--headline">Monotone 40</h6>
        <code>#b2b2b2</code>
      </div>
    </div>
  </div>

  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--accent-20">
        <h6 class="e-heading--headline">Monotone 20</h6>
        <code>#e5e5e5</code>
      </div>
    </div>
  </div>
</div>


### UI
The UI palette should only be applied to state changes within the user interface. This will aid the user to understand when an action is required.

<div class="o-grid o-grid--no-gutter">
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--success">
        <h6 class="e-heading--headline">Success</h6>
        <code>#43b36c</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--warning">
        <h6 class="e-heading--headline">Warning</h6>
        <code>#f68f23</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--information">
        <h6 class="e-heading--headline">Information</h6>
        <code>#0275d8</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--error">
        <h6 class="e-heading--headline">Error</h6>
        <code>#ea4747</code>
      </div>
    </div>
  </div>
</div>


### Text
Text colors can be applied to content to change their appearance and improve hierarchy.

<div class="o-grid o-grid--no-gutter">
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--link">
        <h6 class="e-heading--headline">Link</h6>
        <code>#0a65be</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--quiet">
        <h6 class="e-heading--headline">Quiet</h6>
        <code>#868c90</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--secret">
        <h6 class="e-heading--headline">Secret</h6>
        <code>#aeb2b5</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--highlight">
        <h6 class="e-heading--headline">Highlight</h6>
        <code>#ecdd93</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--code">
        <h6 class="e-heading--headline">Code</h6>
        <code>#f9f2f4</code>
      </div>
    </div>
  </div>
</div>


### Grid
These colors should only be used in conjunction with the grid within a development environment.

<div class="o-grid o-grid--no-gutter">
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--grid">
        <h6 class="e-heading--headline">Grid</h6>
        <code>#ff69b4</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--grid-col">
        <h6 class="e-heading--headline">Grid Col</h6>
        <code>#b2f5b5</code>
      </div>
    </div>
  </div>
  <div class="o-grid__col">
    <div class="o-swatch">
      <div class="o-swatch__background o-swatch__background--grid-col-border">
        <h6 class="e-heading--headline">Grid Col Border</h6>
        <code>#00bfff</code>
      </div>
    </div>
  </div>
</div>

## Buttons

### Base
<button class="c-button c-button--medium" type="button">Button</button>
<button class="c-button c-button--medium" type="submit">Submit Button</button>
<a href="#" class="c-button c-button--medium" role="button">Link Button</a>
<input class="c-button c-button--medium" type="button" value="Input Button">
<input class="c-button c-button--medium" type="submit" value="Input Submit Button">
<label class="c-button c-button--medium">Browse Button<input class="is-hidden" type="file"></label>

{% highlight html %}
<button class="c-button c-button--medium" type="button">Button</button>
<button class="c-button c-button--medium" type="submit">Submit Button</button>
<a href="#" class="c-button c-button--medium" role="button">Link Button</a>
<input class="c-button c-button--medium" type="button" value="Input Button">
<input class="c-button c-button--medium" type="submit" value="Input Submit Button">
<label class="c-button c-button--medium">Browse Button<input class="is-hidden" type="file"></label>
{% endhighlight %}

---

## Grid
<div class="o-grid-key o-grid-key--grid">Grid</div>
<div class="o-grid-key o-grid-key--grid-col">Cols</div>
<div class="o-grid-key o-grid-key--padding">Padding</div>

### Base
Use the ```.o-grid``` class to wrap your ```.o-grid__col``` elements.

<div class="o-grid o-grid--demo">
	<div class="o-grid__col"><div class="o-grid-text">first</div></div>
	<div class="o-grid__col"><div class="o-grid-text">second</div></div>
	<div class="o-grid__col"><div class="o-grid-text">third</div></div>
</div>

{% highlight html %}
<div class="o-grid">
  <div class="o-grid__col">first</div>
  <div class="o-grid__col">second</div>
  <div class="o-grid__col">third</div>
</div>
{% endhighlight %}

### Widths
Use the ```.o-grid__col--width-xx``` class to apply widths to your cols. If you add a width to one col the other cols will automatically take up the rest of the space equally.

<div class="o-grid o-grid--demo">
	<div class="o-grid__col o-grid__col--width-50"><div class="o-grid-text">first</div></div>
	<div class="o-grid__col"><div class="o-grid-text">second</div></div>
	<div class="o-grid__col"><div class="o-grid-text">third</div></div>
</div>

{% highlight html %}
<div class="o-grid">
  <div class="o-grid__col o-grid__col--width-50">first</div>
  <div class="o-grid__col">second</div>
  <div class="o-grid__col">third</div>
</div>
{% endhighlight %}

### Guttering
Remove all guttering from columns:

<div class="o-grid o-grid--no-gutter o-grid--demo">
	<div class="o-grid__col"><div class="o-grid-text">first</div></div>
	<div class="o-grid__col"><div class="o-grid-text">second</div></div>
	<div class="o-grid__col"><div class="o-grid-text">third</div></div>
</div>

{% highlight html %}
<div class="o-grid o-grid--no-gutter">
  <div class="o-grid__col">firs</div>
  <div class="o-grid__col">second</div>
  <div class="o-grid__col">third</div>
</div>
{% endhighlight %}

Remove guttering from one or more columns:
<div class="o-grid o-grid--demo">
  <div class="o-grid__col"><div class="o-grid-text">first</div></div>
  <div class="o-grid__col"><div class="o-grid-text">second</div></div>
  <div class="o-grid__col o-grid__col--no-gutter"><div class="o-grid-text">third</div></div>
</div>

{% highlight html %}
<div class="o-grid">
  <div class="o-grid__col">first</div>
  <div class="o-grid__col">second</div>
  <div class="o-grid__col o-grid__col--no-gutter">third</div>
</div>
{% endhighlight %}

### Nesting
You can nest grids inside cols with relative ease...with nesting you're into advanced territory!

<div class="o-grid o-grid--demo">
	<div class="o-grid__col">
		<div class="o-grid">
			<div class="o-grid__col"><div class="o-grid-text">first</div></div>
			<div class="o-grid__col"><div class="o-grid-text">second</div></div>
		</div>
		<div class="o-grid">
			<div class="o-grid__col"><div class="o-grid-text">third</div></div>
			<div class="o-grid__col"><div class="o-grid-text">fourth</div></div>
		</div>
	</div>
	<div class="o-grid__col"><div class="o-grid-text">fifth</div></div>
</div>

{% highlight html %}
<div class="o-grid o-grid--demo">
  <div class="o-grid__col">
    <div class="o-grid">
      <div class="o-grid__col"><div class="o-grid-text">first</div></div>
      <div class="o-grid__col"><div class="o-grid-text">second</div></div>
    </div>
    <div class="o-grid">
      <div class="o-grid__col"><div class="o-grid-text">third</div></div>
      <div class="o-grid__col"><div class="o-grid-text">fourth</div></div>
    </div>
    </div>
  <div class="o-grid__col"><div class="o-grid-text">fifth</div></div>
</div>
{% endhighlight %}

### Offsets
To "push" a col horizontally across the grid use the ```.o-grid__col--offset-xx``` class. Use in conjunction with widths to perfectly align your cols.

<div class="o-grid o-grid--demo">
	<div class="o-grid__col o-grid__col--width-20"><div class="o-grid-text">first</div></div>
	<div class="o-grid__col o-grid__col--width-20 o-grid__col--offset-60"><div class="o-grid-text">second</div></div>
</div>

{% highlight html %}
<div class="o-grid o-grid--demo">
  <div class="o-grid__col o-grid__col--width-20">first</div>
  <div class="o-grid__col o-grid__col--width-20 o-grid__col--offset-60">second</div>
</div>
{% endhighlight %}

### Wrapping
A grid is essentially a row of columns. However columns can wrap onto the next line within the grid.

Wrap the columns within the grid by adding the .o-grid--wrap modifier class to eliminate this braking the grid by being too wide for the grid container.

<div class="o-grid o-grid--wrap o-grid--demo">
  <div class="o-grid__col o-grid__col--width-50"><div class="o-grid-text">first</div></div>
  <div class="o-grid__col o-grid__col--width-66"><div class="o-grid-text">second</div></div>
</div>

{% highlight html %}
<div class="o-grid o-grid--wrap o-grid--demo">
  <div class="o-grid__col o-grid__col--width-50">first</div>
  <div class="o-grid__col o-grid__col--width-66">second</div>
</div>
{% endhighlight %}

### Vertical Alignment
<div class="o-grid o-grid--bottom o-grid--demo">
	<div class="o-grid__col o-grid__col--top"><div class="o-grid-text">first</div></div>
	<div class="o-grid__col o-grid__col--center"><div class="o-grid-text">second</div></div>
	<div class="o-grid__col"><div class="o-grid-text">third</div></div>
	<div class="o-grid__col"><div class="o-grid-text">fourth
		<br>fourth
		<br>fourth
		<br>fourth
		<br>fourth
		<br>
	</div></div>
</div>

{% highlight html %}
<div class="o-grid o-grid--bottom">
  <div class="o-grid__col o-grid__col--top">first</div>
  <div class="o-grid__col o-grid__col--center">second</div>
  <div class="o-grid__col"><div class="o-grid-text">third</div>
  <div class="o-grid__col">
    fourth
    <br>fourth
    <br>fourth
    <br>fourth
    <br>fourth
    <br>
  </div></div>
</div>
{% endhighlight %}

### Responsive
The grid can be instructed to go full width at certain break points to maximise the screen space and help produce great user experiences on all sorts of devices.
The grid has a fit or full class modifier that is used at different screen sizes.
```.o-grid--{ small | medium | large }-{ fit | full }```

<div class="o-grid o-grid--small-full o-grid--medium-fit o-grid--large-full o-grid--demo">
	<div class="o-grid__col"><div class="o-grid-text">first</div></div>
	<div class="o-grid__col"><div class="o-grid-text">second</div></div>
	<div class="o-grid__col"><div class="o-grid-text">third</div></div>
</div>

{% highlight html %}
<div class="o-grid o-grid--small-full o-grid--medium-fit o-grid--large-full o-grid--demo">
  <div class="o-grid__col">first</div>
  <div class="o-grid__col">second</div>
  <div class="o-grid__col">third</div>
</div>
{% endhighlight %}

### Responsive Suffixes
As well as grid level responsiveness you also have control over the cols within a grid.
Individual cols can change width at specific break points by using responsive suffixes.

<div class="o-grid o-grid--wrap o-grid--demo">
  <div class="o-grid__col o-grid__col--width-100 o-grid__col--width-33@small"><div class="o-grid-text">first</div></div>
  <div class="o-grid__col o-grid__col--width-100 o-grid__col--width-33@medium"><div class="o-grid-text">second</div></div>
  <div class="o-grid__col o-grid__col--width-100 o-grid__col--width-33@large"><div class="o-grid-text">third</div></div>
</div>

{% highlight html %}
<div class="o-grid o-grid--wrap o-grid--demo">
  <div class="o-grid__col o-grid__col--width-100 o-grid__col--width-33@small">first</div>
  <div class="o-grid__col o-grid__col--width-100 o-grid__col--width-33@medium">second</div>
  <div class="o-grid__col o-grid__col--width-100 o-grid__col--width-33@large">third</div>
</div>
{% endhighlight %}

### Fixed
Usually cells in a grid will be fluid and responsive. If however you want to set a cell to a fixed width add the .o-grid__cell--width-fixed modifier and give it a specific width.

<div class="o-grid o-grid--demo">
	<div class="o-grid__col"><div class="o-grid-text">first</div></div>
	<div class="o-grid__col o-grid__col--width-fixed" style="width: 250px"><div class="o-grid-text">static width of 250px</div></div>
	<div class="o-grid__col"><div class="o-grid-text">third</div></div>
</div>

{% highlight html %}
<div class="o-grid o-grid--demo">
  <div class="o-grid__col">first</div>
  <div class="o-grid__col o-grid__col--width-fixed">static width of 250px</div>
  <div class="o-grid__col">third</div>
</div>
{% endhighlight %}
