import { axiosInstance } from '../common/utils/axios';

import { FormData } from 'common/components/ContactInfo/Form/Form';

export const sendData = async (formData: FormData, cvFile: string) => {
  const response = await axiosInstance.post(
    `upload_and_send?full_name=${formData.fullName}&emailAddress=${formData.email}${
      formData.phoneNumber ? '&phone_number=' + formData.phoneNumber : ''
    }${formData.companyName ? '&company_name=' + formData.companyName : ''}${
      formData.additionalInfo ? '&message=' + formData.additionalInfo : ''
    }`,
    cvFile
  );
  return response.data;
};
