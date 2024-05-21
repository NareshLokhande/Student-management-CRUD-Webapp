import axios from "axios";
import {
  GET_STUDENT_API_ROUTE,
  SAVE_STUDENT_API_ROUTE,
} from "../constants/ApiConstants";
import { REMOVE_STUDENT_API_ROUTE } from "../constants/AppRoutes";

export function saveStudent(studentData) {
  return axios.post(SAVE_STUDENT_API_ROUTE, studentData);
}

export function fetchAllStudents() {
  return axios.get(GET_STUDENT_API_ROUTE);
}

export function removeStudents() {
  return axios.delete(`${REMOVE_STUDENT_API_ROUTE}/`);
}

export function fetchAllStudents() {
  return axios.get(GET_STUDENT_API_ROUTE);
}


