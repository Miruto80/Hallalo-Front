import { useState, useCallback } from 'react';
import apiClient from './apiClient';

function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetError = () => setError(null);

  const get = useCallback(async (endpoint, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get(endpoint, config);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const post = useCallback(async (endpoint, payload, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.post(endpoint, payload, config);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const put = useCallback(async (endpoint, payload, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.put(endpoint, payload, config);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const remove = useCallback(async (endpoint, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.delete(endpoint, config);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    resetError,
    get,
    post,
    put,
    remove,
  };
}

export default useApi;
