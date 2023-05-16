// import { styled } from "styled-components";
import styled from "styled-components";
import mediaQuery from "./media";
export const StyleList = styled.div`
.main-content{
    display:flex;
    gap: 24px;
    margin-top: 32px;
    flex:50%;
    ${mediaQuery.md`
    flex-direction:column;
    align-items: center;
    `}
}
.task-list{
    display:flex;
    flex-direction:column;
    flex:50%;
    ${mediaQuery.md`
    width:50%;
    `}
    ${mediaQuery.lt`
    width:100%;
    `}
    ${mediaQuery.sm`
    width:100%;
    `}
}
.form-class{
    display:flex;
    flex-direction: column;
    gap:16px;
    flex:50%;
    ${mediaQuery.md`
    width:50%;
    `}
    ${mediaQuery.lt`
    width:100%;
    `}
    ${mediaQuery.sm`
    width:100%;
    `}
}
input{
    border: 1px solid rgb(209, 209, 209);
    height: 32px;
    padding: 0px 80px 0px 8px;
    border-radius: 8px;
}
button{
    padding: 8px 0;
    background: #854fff;
    border:none;
    border-radius: 8px;
    color: #fff;
    cursor:pointer;
}
h3, form p{
    margin-top:0;
    font-size:20px;
    font-weight:600;
}
.task-item{
    border: 1px solid rgb(209, 209, 209);
    padding: 8px;
    border-radius: 8px;
}
.container{
    max-width: 800px;
    margin: 0 auto;
    ${mediaQuery.sm`
    max-width:400px;
    `}
    ${mediaQuery.lt`
    max-width:320px;
    `}
}
`