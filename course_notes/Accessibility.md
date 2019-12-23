# Accessibility with JavaScript

## Buttons vs Links
Buttons are to be used for actions that happen inside of an application. 

Links are used to change the page. _A link that doesn't go anywhere is not a link_. 

**Do not mix those up**

## Keyboard accessibility
> Things that are not keyboard accessible should not have clicks registered on them unless you need to.

If you need to make something that isn't a button into a button, you can give it a `role="button"` and a `tabindex="0"` to place it in the normal flow of the document. However, you can just place those elements inside `<button>` tags. 

You can add more than one event listener to an element, listening to keys as well as clicks. 

`event.key` will give you the information for whatever key has been used in the keyboard. 
