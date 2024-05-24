import {axiosInstance} from '../common/utils/axios';
import {FormData as FormDataType} from 'common/components/ContactInfo/Form/Form';

export const sendData = async (formData: FormDataType) => {
    const data = new FormData();
    data.append('full_name', formData.fullName);
    data.append('emailAddress', formData.email);
    data.append('services', formData.service);

    if (formData.phoneNumber) {
        data.append('phone_number', formData.phoneNumber);
    }

    if (formData.companyName) {
        data.append('company_name', formData.companyName);
    }

    if (formData.additionalInfo) {
        data.append('message', formData.additionalInfo);
    } else {
        console.warn('No additional info provided');
    }

    try {
        const response = await axiosInstance.post('upload_and_send', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};
