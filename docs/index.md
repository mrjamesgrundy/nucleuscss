---
layout: home
title: nucleuscss
---

## Typography

### Hierarchy

#### Heading 1

<h1 class="c-heading-main">Open Sans Semibold 600 32px</h1>

{% highlight html %}
<h1 class="c-heading-main">Open Sans Semibold 600 32px</h1>
{% endhighlight %}

#### Heading 2

<h2 class="c-heading-sub">Open Sans Semibold 600 24px</h2>

{% highlight html %}
<h2 class="c-heading-sub">Open Sans Semibold 600 24px</h2>
{% endhighlight %}

#### Heading 3

<h3 class="c-heading-section">Open Sans Semibold 600 20px</h3>

{% highlight html %}
<h3 class="c-heading-section">Open Sans Semibold 600 20px</h3>
{% endhighlight %}

#### Heading 4

<h4 class="c-heading-descriptive">Open Sans Semibold 600 16px</h4>

{% highlight html %}
<h4 class="c-heading-descriptive">Open Sans Semibold 600 16px</h4>
{% endhighlight %}

#### Heading 5

<h5 class="c-heading-overview">Open Sans Semibold 700 14px</h5>

{% highlight html %}
<h5 class="c-heading-overview">Open Sans Semibold 700 14px</h5>
{% endhighlight %}

#### Heading 6

<h6 class="c-heading-headline">Open Sans Bold 700 14px</h6>

{% highlight html %}
<h6 class="c-heading-headline">Open Sans Bold 700 14px</h6>
{% endhighlight %}

#### Paragraph

<p class="c-paragraph">Open Sans Regular 400 13px</p>

{% highlight html %}
<p class="c-paragraph">Open Sans Regular 400 13px</p>
{% endhighlight %}

#### Code

<code class="c-code">Monospace Regular 14px</code>

{% highlight html %}
<code class="c-code">Monospace Regular 14px</code>
{% endhighlight %}

#### Blockquote

<blockquote class="c-blockquote">
  <p class="c-blockquote__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="c-blockquote__footer">Source Name, <cite title="Source Title">Source Title</cite></footer>
</blockquote>

{% highlight html %}
<blockquote class="c-blockquote">
  <p class="c-blockquote__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="c-blockquote__footer">Source Name, <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endhighlight %}

### Alignment

<p class="c-paragraph u-typography--left">Text align content left</p>
<p class="c-paragraph u-typography--center">Text align content center</p>
<p class="c-paragraph u-typography--right">Text align content right</p>
<p class="c-paragraph u-typography--justify">Justify content</p>
<p class="c-paragraph u-typography--nowrap">Nowrap content</p>

{% highlight html %}
<p class="c-paragraph u-typography--left">Text align content left</p>
<p class="c-paragraph u-typography--center">Text align content center</p>
<p class="c-paragraph u-typography--right">Text align content right</p>
<p class="c-paragraph u-typography--justify">Justify content</p>
<p class="c-paragraph u-typography--nowrap">Nowrap content</p>
{% endhighlight %}

### Abbreviations

<p class="c-paragraph"><abbr class="c-paragraph--help" title="Help text">Help Text</abbr></p>

{% highlight html %}
<p class="c-paragraph"><abbr class="c-paragraph--help" title="Help text">Help Text</abbr></p>
{% endhighlight %}

### Weights and Types

<p class="c-paragraph u-typography--bold">Open Sans Bold 700</p>
<p class="c-paragraph u-typography--semi-bold">Open Sans Semi Bold 600</p>
<p class="c-paragraph u-typography--regular">Open Sans Regular 400</p>
<p class="c-paragraph u-typography--monospace">Monospace 400</p>

{% highlight html %}
<p class="c-paragraph u-typography--bold">Open Sans Bold 700</p>
<p class="c-paragraph u-typography--semi-bold">Open Sans Semi Bold 600</p>
<p class="c-paragraph u-typography--regular">Open Sans Regular 400</p>
<p class="c-paragraph u-typography--monospace">Monospace 400</p>
{% endhighlight %}

### Lists

#### Definition List

<dl class="c-definition-list">
  <dt>Definition list title 1</dt>
  <dd>Definition list description 1</dd>
  <dt>Definition list title 2</dt>
  <dd>Definition list description 2</dd>
  <dt>Definition list title 3</dt>
  <dd>Definition list description 3</dd>
</dl>

{% highlight html %}
<dl class="c-definition-list">
  <dt>Definition list title 1</dt>
  <dd>Definition list description 1</dd>
  <dt>Definition list title 2</dt>
  <dd>Definition list description 2</dd>
  <dt>Definition list title 3</dt>
  <dd>Definition list description 3</dd>
</dl>
{% endhighlight %}

#### Ordered List

<ol class="c-ordered-list">
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

{% highlight html %}
<ol class="c-ordered-list">
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
{% endhighlight %}

#### Unordered List

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

{% highlight html %}
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
{% endhighlight %}

#### Unstyled List

<ul class="c-unordered-list c-unordered-list--unstyled">
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
<ul class="c-unordered-list c-unordered-list--unstyled">
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

<ul class="c-unordered-list c-unordered-list--inline">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>

{% highlight html %}
<ul class="c-unordered-list c-unordered-list--inline">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
{% endhighlight %}

### Styles

<p class="c-paragraph"><span class="u-typography--primary">Primary</span></p>
<p class="c-paragraph"><span class="u-typography--success">Success</span></p>
<p class="c-paragraph"><span class="u-typography--info">Info</span></p>
<p class="c-paragraph"><span class="u-typography--warning">Warning</span></p>
<p class="c-paragraph"><span class="u-typography--error">Error</span></p>
<p class="c-paragraph"><span class="u-typography--quiet">Quiet</span></p>
<p class="c-paragraph"><span class="u-typography--secret">Secret</span></p>
<p class="c-paragraph"><span class="u-typography--highlight">Highlight</span></p>
<p class="c-paragraph"><code class="u-typography--code">code</code></p>

{% highlight html %}
<p class="c-paragraph"><span class="u-typography--primary">Primary</span></p>
<p class="c-paragraph"><span class="u-typography--success">Success</span></p>
<p class="c-paragraph"><span class="u-typography--info">Info</span></p>
<p class="c-paragraph"><span class="u-typography--warning">Warning</span></p>
<p class="c-paragraph"><span class="u-typography--error">Error</span></p>
<p class="c-paragraph"><span class="u-typography--quiet">Quiet</span></p>
<p class="c-paragraph"><span class="u-typography--secret">Secret</span></p>
<p class="c-paragraph"><span class="u-typography--highlight">Highlight</span></p>
<p class="c-paragraph"><code class="u-typography--code">code</code></p>
{% endhighlight %}

### Usage

<h1 class="c-heading-main">Main Headline</h1>
<h2 class="c-heading-sub u-typography--quiet">Sub Headline</h2>
<h6 class="c-heading-headline u-typography--info">Date / Time</h6>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<h3 class="c-heading-section">Section Headline</h3>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

<h4 class="c-heading-descriptive">Descriptive Headline</h4>
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

<h5 class="c-heading-overview u-typography--secret">Overview Headline</h5>
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

<h6 class="c-heading-headline u-typography--info">Section Headline</h6>
<dl>
  <dt>Definition list title 1</dt>
  <dd><a href="#" title="Definition list description 1">Definition list description 1</a></dd>
  <dt>Definition list title 2</dt>
  <dd><a href="#" title="Definition list description 2">Definition list description 2</a></dd>
  <dt>Definition list title 3</dt>
  <dd><a href="#" title="Definition list description 3">Definition list description 3</a></dd>
</dl>

## Color Guide

## Buttons
