# 7Plus

If time was not a constraint I'd have completed the task with following -

1. Create 2 separate UI components :
    - Banner containing only banner image
    - Banner overlay with logo and title

2. Pass following values through 'props' to the UI components :
    - Banner: banner image path
    - Banner overlay: logo image path and title
    Using this approach, the component can be used for the banner for other shows too

3. The component is built using styled components, I'd move the hardcoded styles to a separate .sass file such as :
    - banner & logo image width & height
    - container width & height
    - font size, color etc.

NOTE: I have not used any unit test framework because there is no script to test