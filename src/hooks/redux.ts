import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {Dispatch, ThunkDispatch} from '@reduxjs/toolkit'
import {AppDispatch, RootState} from '../store'

export const useAppDispatch = (): ThunkDispatch<AppDispatch, any, any> & Dispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
