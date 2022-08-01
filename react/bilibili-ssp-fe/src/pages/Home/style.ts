import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'
export const HomeWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    z-index: 10;
    padding-bottom: ${px2rem(2)};
    .partition {
        position: relative;
        .tab-bar {
            margin-right: ${px2rem(56)};
        }
        .switch {
            position: absolute;
            top: 0;
            bottom: 0;
            right: ${px2rem(22)};
            line-height: ${px2rem(40)};
            font-size: ${px2rem(18)};
        }
    }
`
export const ContentWrapper = styled.div`
`