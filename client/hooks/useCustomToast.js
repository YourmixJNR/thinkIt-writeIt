import { useToast } from "@chakra-ui/react";

export const useCustomToast = () => {
    const toast = useToast();

    const position = 'top';
    const isClosable = true;
    const duration = 3000;

    const showToast = (type, title) => {
        toast({
            title: `${title}`,
            status: type,
            position: position,
            isClosable: isClosable,
            duration: duration,
        });
    };

    return {
        success: (title) => showToast('success', title),
        error: (title) => showToast('error', title),
        warning: (title) => showToast('warning', title),
        info: (title) => showToast('info', title),
    };
};
