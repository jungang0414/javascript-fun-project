# FlashCard

1. https://www.w3schools.com/howto/howto_css_flip_card.asp

# 如何達到翻轉效果

1. transform: rotate
    rotate屬性可以讓元素以X/Y軸為軸心翻轉。
    若是使用rotateX，會以X軸為基準翻轉，做出垂直旋轉的效果。

    rotateX(0deg)表示沒有翻轉，元素面向正面;
    rotateX(180deg)則表示轉了180度，元素面向背面。

2. backface-visibility: hidden
    backface-visibility屬性可以決定元素在面向背面時是否顯示，預設值為visible。(為總是顯示)
    當把.inner-card-back元素的 backface-visibility: hidden 拿掉
    就會顯示已經渲染在背面的元素。


# 需達成的功能

1. 新增卡片資料
    選取所需要的DOM元素
    監聽新增卡片按鈕，點擊後顯示新增表單
    監聽表單內的新增卡片按鈕，點擊後將輸入框的資訊儲存。 使用localStorage
    完成上述則離開新增表單.

2. 渲染出所有卡片
    建立一個新div元素並將class設為card (才能套用原來的css樣式)
    判斷卡片位置，若是第一張卡片則加入active class(配合切換功能)
    將剛建立的div元素修改為我們翻牌的結構，並填入question&answer的值
    在建立的div元素上加入監聽器，toggle show-answer讓卡片可以垂直翻轉
    最後將新建立的div元素加入cardsContainer底下，呈現在畫面上

3. 切換展示的卡片
setp1:
    需要在將要顯示的卡片加上active class並在現在顯示得卡片上加上left class。
    如何選到目前卡片以及下一張卡片?
    用一個變數紀錄目前所有的卡片元素，可以使用querySelectorAll選取元素。會需要兩個變數，一個紀錄當前卡片的index,另一變數則記錄所有目前有的卡片元素。並在每次建立卡片時我們都需要將卡片(整個element)推進記錄卡片元素的陣列。
setp2:
    prev&next 切換卡片
    將目前卡片元素className修改為"card left"/"card" (判斷是prev還是next按鈕)，更新currentActiveCard的值，讓其指向更新後的index，判斷是否有上一張/下一張張卡片，如果沒有則使currentActiveCard為0或是最後一個index(判斷是prev還是next按鈕)，更新下方顯示數字(當總共有三張卡片並切換到第二張時顯示為2/3)

4. 清除所有卡片資料
    清除在localStorage內的資料

5. 額外功能
    刪除單一卡片的功能
    沒有卡片時的placeholder
    不同卡組間的切換

