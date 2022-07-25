import * as actionTypes from '../action-types'
import { Dispatch, AnyAction } from 'redux'
import { getParitionsRequest } from '@/api/partitions'

export const setPartitions = (data: any[]) => ({
    type: actionTypes.SET_PARTITIONS,
    data
})

export const getPartitions = () => {
    return (dispatch: Dispatch<AnyAction>) => {
        getParitionsRequest()
            .then(data => {
                dispatch(setPartitions(data))
            })
    }
}