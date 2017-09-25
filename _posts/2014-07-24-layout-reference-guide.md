---
title: "Layout Reference Guide"
date: 2014-04-07
categories: reference
---

Introduction to Markdown
========================
<div class="leftnote">1.</div>
<hr>

To write compatible course notes, you need to be familiar with <a href="http://daringfireball.net/projects/markdown/">Markdown</a>. Markdown is a tool that lets you automatically convert a plain-text document into an HTML file. All you need to do is follow a few specific *formatting rules*.

If anything is left unclear after this guide, you can start by looking at the raw source files for existing lecture notes. They're all accessible from the Shared Dropbox folder.

Entering Basic Notes
====================
<div class="leftnote">2.</div>
<hr>

Headers
-------
- **Main Headings** are 'underlined' by <code>=</code>. These are followed by a horizontal rule, entered with <code>&lt;hr&gt;</code>.
	<pre><code>This is a Main Header
=====================
&lt;hr&gt;</code></pre>

- **Sub-headings** are 'underlined' by <code>-</code>. These are usually emphasized by surrounding the text with <code>**</code>.
	<pre><code>**This is a Second Level Header**
---------------------------------</code></pre>

- **Smaller Headings** can be made by prepending the heading with an appropriate number of <code>#</code> signs. <code>###</code> will make a 3rd-level header, <code>####</code> will make a 4th level header, etc.
	<pre><code>###**This is a 3rd Level Header**
####**This is a 4th Level Header**
#####**This is a 5th Level Header**
######**This is a 6th Level Header**</code></pre>

Paragraphs and Formatting
-------------------------
- **Paragraphs** are entered just like you would normally write a paragraph.
- If you want to *bold* some text, surround it like <code>*this*</code>
- If you want to **underline** some text, surround it like <code>**this**</code>

###Superscripts, Subscripts
- If you want to *superscript* some text, such as in Na<sup>2+</sup>, surround it like <code>&lt;sup&gt;this&lt;/sup&gt;</code>.
- If you want to *subscript* some text, such as in P<sub>A</sub>CO<sub>2</sub>, surround it like <code>&lt;sub&gt;this&lt;/sub&gt;</code>.

###Special Characters
- Some special characters that come in handy include:
	1. **Right Arrow (&rarr;)**, which can be entered with <code>&amp;rarr;</code>
	2. **Left Arrow (&rarr;)**, which can be entered with <code>&amp;larr;</code>
	3. **Greater-than (&gt;)** and **Less-than (&lt;)**, which can be entered with <code>&amp;gt;</code> and <code>&amp;lt;</code> respectively.
	4. **Degree (&deg;)**, which can be entered with <code>&amp;deg;</code>

Bulleted and Numbered Lists
---------------------------
- **Bulleted lists** are made by adding a dash before each point.
- **Numbered lists** are made by adding numbers followed by periods, before each point.
- **Nested lists** are made by indenting the list.

	**Bulleted Lists**
	- This is a bulleted list.
	- This is the second bullet.
	- This is the third bullet.

	**Numbered Lists**
	1. This is a numbered list.
	2. This is the second number.
	3. This is the third number.

	**Nested Lists**
	- This is a top-level bullet.
	- This is a second-level bullet.
	- This is another second level bullet.

Combined Example
----------------
Below is an **example** of everything that has been described above:

<pre>
<code>Anatomy of the Larynx
=====================
&lt;hr&gt;
###**Intrinsic vs Extrinsic Muscles**
- **Extrinsic muscles** &amp;rarr; on the **outside** of the larynx. 
	- These are all innervated by *vagus* (cranial nerve X).
	- These are also known as the **strap muscles**.

- **Intrinsic muscles** &amp;rarr; on the **inside** of the larynx.
	- Innervation of the intrinsic muscles is more complicated.
	- They're also innervated by branches of *vagus*, namely:
		1. *Superior Laryngeal Nerve* (SLN).
		2. *Recurrent Laryngeal Nerve* (RLN).</code>
</pre>

When converted into HTML, this is what you will see on the website:

<iframe id="preview_pane_1" src="/resources/images/previews/preview1.html"></iframe>

Advanced Features
=================
<div class="leftnote">3.</div>
<hr>

Images
------

<img class="right" src="/resources/images/magikarp.png">
Images can either be displayed **beneath** the text, or **beside** the text. An example of an image placed *beside the text* is shown to the right.

- **Beneath the text** images are added with the following code:<br><code>&lt;img src="IMAGE_URL.jpg"&gt;</code>
- **Beside the text** images are added with the following code:<br><code>&lt;img class="right" src="IMAGE_URL.jpg"&gt;</code>

Below is an example of an image placed *beneath the text*. For full-width images, you can also add a figure caption. To do this, write your caption after the image, and surround the caption with backticks &rarr; <code>`</code>.

<img src="/resources/images/gyarados.png">

<div id="caption">This is an example of what a figure caption will look like. To make one, surround these sentences with backticks.</div>

An example of this is:

<pre><code>&lt;img src="IMAGE_URL.jpg"&gt;
`My caption is here.`</code></pre>

When linking to images, make sure you *save a copy* on the shared Dropbox folder, so that there's a central location where all the image references are located.

Emphasis Boxes
--------------

If you want to *reinforce* a particular point or concept, you can put it in an **emphasis box**. To put something in an emphasis box, just add a <code>&gt;</code> to the beginning of each line you want to include. For instance, the following Markdown:

<pre><code>&gt; ###**ASD Acronym for Aortic Stenosis**
&gt; - **Angina** &rarr; 50% of patients die within *5 years of onset*
&gt; - **Syncope** &rarr; 50% of patients die within *3 years of onset*
&gt; - **Dyspnea** &rarr; 50% of patients die within *2 years of onset*
</code></pre>

Will result in the following emphasis box:

<iframe id="preview_pane_2" src="/resources/images/previews/preview2.html"></iframe>

Equations
---------

You can input $$\LaTeX$$ code into your notes if you need to write equations. LaTeX is a typesetting system that is popular for technical and scientific writing. It's fairly complex, so only some examples will be shown here:

- **The Alveolar Gas Equation**
	<pre><code>$$P_AO_2 = P_IO_2 - \frac{P_ACO_2}{0.8}$$</code></pre>

$$P_AO_2 = P_IO_2 - \frac{P_ACO_2}{0.8}$$

- **The Pulmonary Vascular Resistance** 
	<pre><code>$$PVR = \frac{\overline{P_{pa}} - \overline{P_{pv}}}{CO}$$</code></pre>

$$PVR = \frac{\overline{P_{pa}} - \overline{P_{pv}}}{CO}$$

- **Chemical Equations**
	<pre><code>$$H_2O + CO_2 \rightarrow H_2CO_3 \rightarrow HCO_3^- + H^+$$</code></pre>

$$H_2O + CO_2 \rightarrow H_2CO_3 \rightarrow HCO_3^- + H^+$$

<br>

###Multi-Line Equations

<pre><code>$$
\begin{align}
	FE_{Na} &amp;= \frac{[Na]_u/[Na]_p}{[\text{Creat}]_u/[\text{Creat}]_p} \times 100\%\\
	FE_{Na} &amp;= \frac{15/160}{6000/90} \times 100\%\\
	FE_{Na} &amp;= \frac{15/160}{6000/90} \times 100\%\\
	FE_{Na} &amp;= \frac{15/160}{6000/90} \times 100\%\\
	FE_{Na} &amp;= 0.14\%
\end{align}
$$</code></pre>

$$
\begin{align}
	FE_{Na} &= \frac{[Na]_u/[Na]_p}{[\text{Creat}]_u/[\text{Creat}]_p} \times 100\%\\
	FE_{Na} &= \frac{15/160}{6000/90} \times 100\%\\
	FE_{Na} &= \frac{15/160}{6000/90} \times 100\%\\
	FE_{Na} &= \frac{15/160}{6000/90} \times 100\%\\
	FE_{Na} &= 0.14\%
\end{align}
$$

<br>

###Inline Equations
<pre><code>- The $$\dot{V}_{CO_2}$$ is the rate of carbon dioxide loss from the body.
- The $$\dot{V}_{O_2}$$ is the rate of oxygen intake from the air.
- **Hyperventilation:** &amp;rarr; $$P_ACO_2$$ &amp;darr;
- **Hypoventilation:** &amp;rarr; $$P_ACO_2$$ &amp;uarr;
</code></pre>

<iframe id="preview_pane_3" src="/resources/images/previews/preview3.html"></iframe>

Tables
------
**Tables** can be entered by following the formatting shown below:

	| Lab Test            | Value        | Normal Values   |
	|---------------------|--------------|-----------------|
	| *pH*                | 7.35         | 7.4             |
	| *PCO<sub>2</sub>*   | 60 mmHg      | 40 mmHg         |
	| *HCO<sub>3</sub>*   | 32 mmol/L    | 24-26 mmHg      |

Which will result in:

| Lab Test            | Value        | Normal Values   |
|---------------------|--------------| ----------------|
| *pH*                | 7.35         | 7.4             |
| *PCO<sub>2</sub>*   | 60 mmHg      | 40 mmHg         |
| *HCO<sub>3</sub>*   | 32 mmol/L    | 24-26 mmHg      |

Side-Notes
----------
**Side-notes** can be used if you want to add some clarification, or an aside, to a point. A side-note will be placed to the right of a passage. The code for this is shown below:

	<span class="sidenote">This is a side-note. It'll appear to the right of the body text when seen on the final website, just like this.</span>


